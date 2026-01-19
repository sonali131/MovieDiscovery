import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieSearchResponse, MovieDetails } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  searchMovies(query: string, page: number = 1): Observable<MovieSearchResponse> {
    return this.http.get<MovieSearchResponse>(`${this.apiUrl}?s=${query}&page=${page}`);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}?i=${id}&plot=full`);
  }
}
