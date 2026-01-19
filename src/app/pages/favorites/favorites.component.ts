import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../core/services/favorite.service';
import { MovieCardComponent } from '../../shared/components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <div class="fav-page">
      <h1>My Watchlist</h1>

      @if (favService.favMovies().length > 0) {
        <div class="movie-grid">
          @for (movie of favService.favMovies(); track movie.imdbID) {
            <app-movie-card [movie]="movie" />
          }
        </div>
      } @else {
        <div class="empty-state">
          <p>Your watchlist is empty.</p>
          <a routerLink="/">Browse Movies</a>
        </div>
      }
    </div>
  `,
  styles: [`
    .fav-page { padding: 100px 40px; }
    .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 25px; }
    .empty-state { text-align: center; margin-top: 50px; color: #888; }
    a { color: #e50914; text-decoration: none; }
  `]
})
export class FavoritesComponent {
  public favService = inject(FavoriteService);
}
