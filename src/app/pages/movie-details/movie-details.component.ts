import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { RuntimePipe } from '../../shared/pipes/runtime.pipe';
import { MovieDetails } from '../../core/models/movie.model';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RuntimePipe, RouterModule],
  template: `
    @if (movie(); as m) {
      <div class="details-page">
        <div class="backdrop" [style.backgroundImage]="'url(' + m.Poster + ')'"></div>
        <div class="main-content">
          <div class="poster-container">
            <img [src]="m.Poster !== 'N/A' ? m.Poster : 'assets/placeholder.jpg'" alt="poster">
          </div>
          <div class="info-container">
            <nav class="breadcrumb"><a routerLink="/">Home</a> / {{ m.Title }}</nav>
            <h1>{{ m.Title }}</h1>
            <div class="meta">
              <span>{{ m.Year }}</span> |
              <span>{{ m.Rated }}</span> |
              <span>{{ m.Runtime | runtime }}</span>
            </div>
            <p class="genre">{{ m.Genre }}</p>
            <p class="plot">{{ m.Plot }}</p>
            <div class="actions">
              <button class="fav-btn" (click)="toggleFav(m)">
                {{ isFav(m.imdbID) ? '❤️ Remove' : '🤍 Add to Watchlist' }}
              </button>
            </div>
            <div class="credits">
              <p><strong>Director:</strong> {{ m.Director }}</p>
              <p><strong>Cast:</strong> {{ m.Actors }}</p>
              <p><strong>Awards:</strong> {{ m.Awards }}</p>
              <p><strong>IMDb Rating:</strong> ⭐ {{ m.imdbRating }}</p>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="loader">Loading details...</div>
    }
  `,
  styles: [`
    .details-page { min-height: 100vh; position: relative; }
    .backdrop { height: 60vh; width: 100%; background-size: cover; background-position: center; filter: blur(20px) brightness(0.3); position: absolute; top: 0; z-index: -1; }
    .main-content { display: flex; padding: 100px 50px; gap: 40px; flex-wrap: wrap; }
    .poster-container img { width: 300px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .info-container { flex: 1; min-width: 300px; }
    h1 { font-size: 3rem; margin: 10px 0; }
    .meta { color: #ccc; margin-bottom: 10px; }
    .genre { color: var(--primary); font-weight: bold; }
    .plot { font-size: 1.1rem; line-height: 1.6; margin: 20px 0; max-width: 800px; }
    .fav-btn { padding: 12px 24px; border-radius: 5px; border: none; background: #e50914; color: white; cursor: pointer; font-weight: bold; }
    .credits { margin-top: 30px; border-top: 1px solid #333; padding-top: 20px; }
    .credits p { margin: 5px 0; color: #bbb; }
    .breadcrumb a { color: #aaa; text-decoration: none; }
  `]
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  private favService = inject(FavoriteService);

  movie = signal<MovieDetails | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('imdbId');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe(res => {
        this.movie.set(res);
      });
    }
  }

  toggleFav(m: any) { this.favService.toggleFavorite(m); }
  isFav(id: string) { return this.favService.isFavorite(id); }
}
