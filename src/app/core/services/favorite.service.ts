// src/app/core/services/favorite.service.ts
import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  private storageKey = 'watchlist';
  // State management using Signals
  favMovies = signal<any[]>(JSON.parse(localStorage.getItem(this.storageKey) || '[]'));

  constructor() {
    // Automatically persist to localStorage whenever the signal changes
    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.favMovies()));
    });
  }

  toggleFavorite(movie: any) {
    const current = this.favMovies();
    const exists = current.find(m => m.imdbID === movie.imdbID);

    if (exists) {
      this.favMovies.set(current.filter(m => m.imdbID !== movie.imdbID));
    } else {
      this.favMovies.set([...current, movie]);
    }
  }

  isFavorite(id: string): boolean {
    return this.favMovies().some(m => m.imdbID === id);
  }
}
