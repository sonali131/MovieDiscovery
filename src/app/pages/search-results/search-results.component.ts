// import { Component, inject, signal, effect } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { MovieService } from '../../core/services/movie.service';
// import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

// @Component({
//   selector: 'app-search-results',
//   standalone: true,
//   imports: [CommonModule, MovieCardComponent],
//   template: `
//     <div class="search-page">
//       <h2>Search Results for: "{{ query() }}"</h2>

//       @if (movies().length > 0) {
//         <div class="movie-grid">
//           @for (movie of movies(); track movie.imdbID) {
//             <app-movie-card [movie]="movie" />
//           }
//         </div>
//         <div class="pagination">
//           <button (click)="loadMore()" [disabled]="isLoading()">
//             {{ isLoading() ? 'Loading...' : 'Load More' }}
//           </button>
//         </div>
//       } @else if (!isLoading()) {
//         <div class="no-results">No movies found for "{{ query() }}"</div>
//       }
//     </div>
//   `,
//   styles: [`
//     .search-page { padding: 80px 40px; }
//     .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 25px; }
//     .pagination { display: flex; justify-content: center; margin-top: 40px; }
//     button { padding: 10px 25px; background: #e50914; color: white; border: none; cursor: pointer; border-radius: 4px; }
//     button:disabled { background: #555; }
//   `]
// })
// export class SearchResultsComponent {
//   private route = inject(ActivatedRoute);
//   private movieService = inject(MovieService);

//   query = signal('');
//   movies = signal<any[]>([]);
//   page = 1;
//   isLoading = signal(false);

//   constructor() {
//     // React to query param changes
//     this.route.queryParams.subscribe(params => {
//       this.query.set(params['q'] || '');
//       this.page = 1;
//       this.movies.set([]);
//       this.search();
//     });
//   }

//   search() {
//     if (!this.query()) return;
//     this.isLoading.set(true);
//     this.movieService.searchMovies(this.query(), this.page).subscribe({
//       next: (res) => {
//         if (res.Search) {
//           this.movies.set([...this.movies(), ...res.Search]);
//         }
//         this.isLoading.set(false);
//       },
//       error: () => this.isLoading.set(false)
//     });
//   }

//   loadMore() {
//     this.page++;
//     this.search();
//   }
// }
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component'; // 1. लोडर इम्पोर्ट किया

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, LoaderComponent], // 2. imports में लोडर जोड़ा
  template: `
    <div class="search-page">

      <!-- 3. शुरुआती सर्च के लिए बड़ा लोडर -->
      @if (isLoading() && page === 1) {
        <app-loader [fullScreen]="true" message="Finding your movies..."></app-loader>
      }

      <h2>Search Results for: "{{ query() }}"</h2>

      @if (movies().length > 0) {
        <div class="movie-grid">
          @for (movie of movies(); track movie.imdbID) {
            <app-movie-card [movie]="movie" />
          }
        </div>

        <div class="pagination">
          <!-- 4. "Load More" के लिए छोटा लोडर -->
          @if (isLoading() && page > 1) {
            <app-loader message="Loading more..."></app-loader>
          } @else {
            <button (click)="loadMore()" [disabled]="isLoading()">
              Load More
            </button>
          }
        </div>
      }

      <!-- 5. कोई मूवी न मिलने पर मैसेज -->
      @else if (!isLoading()) {
        <div class="no-results">
          <p>No movies found for "{{ query() }}". Try searching something else!</p>
        </div>
      }
    </div>
  `,
  styles: [`
    .search-page {
      padding: 100px 40px;
      min-height: 80vh;
    }
    h2 { margin-bottom: 30px; font-weight: 300; color: #808080; }
    .movie-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 25px;
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      padding-bottom: 50px;
    }
    button {
      padding: 12px 35px;
      background: #e50914;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
      transition: 0.3s;
    }
    button:hover { background: #ff0a16; transform: scale(1.05); }
    button:disabled { background: #555; cursor: not-allowed; }

    .no-results {
      text-align: center;
      margin-top: 100px;
      font-size: 1.2rem;
      color: #555;
    }
  `]
})
export class SearchResultsComponent {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);

  query = signal('');
  movies = signal<any[]>([]);
  page = 1;
  isLoading = signal(false);

  constructor() {
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      if (q !== this.query()) {
        this.query.set(q);
        this.page = 1;
        this.movies.set([]);
        this.search();
      }
    });
  }

  search() {
    if (!this.query()) return;
    this.isLoading.set(true);

    this.movieService.searchMovies(this.query(), this.page).subscribe({
      next: (res) => {
        if (res.Search) {
          // पिछले मूवीज में नई मूवीज जोड़ना
          this.movies.set([...this.movies(), ...res.Search]);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Search error:', err);
        this.isLoading.set(false);
      }
    });
  }

  loadMore() {
    this.page++;
    this.search();
  }
}
