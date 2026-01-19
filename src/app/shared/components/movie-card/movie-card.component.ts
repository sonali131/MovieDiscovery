import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieSummary } from '../../../core/models/movie.model';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="movie-card" [routerLink]="['/movie', movie.imdbID]">
      <img [src]="movie.Poster !== 'N/A' ? movie.Poster : 'assets/placeholder.jpg'" [alt]="movie.Title">
      <div class="card-info">
        <h3>{{ movie.Title }}</h3>
        <p>{{ movie.Year }}</p>
      </div>
    </div>
  `,
  styles: [`
    .movie-card { width: 160px; cursor: pointer; transition: 0.3s; }
    .movie-card:hover { transform: scale(1.05); }
    img { width: 100%; border-radius: 8px; height: 240px; object-fit: cover; }
    h3 { font-size: 0.9rem; margin: 8px 0 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    p { color: gray; font-size: 0.8rem; }
  `]
})
export class MovieCardComponent {
  @Input() movie!: MovieSummary;
}
