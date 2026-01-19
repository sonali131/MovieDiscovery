import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../core/services/movie.service';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, LoaderComponent],
  template: `
    <div class="home-container">
      <section class="hero">
        <div class="hero-content">
          <h1>Movie Discovery</h1>
          <p>Explore your favorite genres from OMDb database</p>
        </div>
      </section>

      <!-- अगर कोई भी कैटेगरी अभी तक लोड नहीं हुई, तभी बड़ा लोडर दिखाएं -->
      @if (movieSections().length === 0) {
        <app-loader message="Fetching latest movies..."></app-loader>
      }

      @for (section of movieSections(); track section.category) {
        <div class="category-section">
          <h2 class="category-title">{{ section.category }}</h2>
          <div class="horizontal-scroll">
            @for (movie of section.movies; track movie.imdbID) {
              <app-movie-card [movie]="movie" />
            }
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .home-container { padding-bottom: 50px; background: #141414; }
    .hero {
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2), #141414),
                  url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070');
      background-size: cover;
      background-position: center;
      text-align: center;
    }
    .hero-content h1 { font-size: 4rem; margin-bottom: 10px; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); }
    .hero-content p { font-size: 1.2rem; color: #ccc; }

    .category-section { margin-bottom: 30px; }
    .category-title { margin-left: 4%; font-size: 1.5rem; color: #e5e5e5; margin-bottom: 10px; }
    .horizontal-scroll {
      display: flex;
      overflow-x: auto;
      gap: 15px;
      padding: 10px 4%;
      scrollbar-width: none;
    }
    .horizontal-scroll::-webkit-scrollbar { display: none; }
  `]
})
export class HomeComponent implements OnInit {
  private movieService = inject(MovieService);

  // मूवी सेक्शन्स के लिए सिग्नल
  movieSections = signal<{category: string, movies: any[]}[]>([]);

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    const categories = ['Action', 'Comedy', 'Drama', 'Thriller'];

    // हर कैटेगरी को अलग-अलग सब्सक्राइब करें ताकि वो एक-एक करके लोड हों
    categories.forEach(cat => {
      this.movieService.searchMovies(cat).pipe(
        map(res => ({
          category: cat,
          movies: res.Search ? res.Search.slice(0, 10) : []
        }))
      ).subscribe({
        next: (data) => {
          // पिछले डेटा में नया सेक्शन जोड़ें
          this.movieSections.update(current => [...current, data]);
        },
        error: (err) => console.error(`Error loading ${cat}:`, err)
      });
    });
  }
}
