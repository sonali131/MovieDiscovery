/**
 * Represents the response from the Search endpoint
 * (e.g., ?s=batman)
 */
export interface MovieSearchResponse {
  Search: MovieSummary[];
  totalResults: string; // OMDb returns this as a string
  Response: string;     // "True" or "False"
  Error?: string;       // Present if Response is "False"
}

/**
 * Basic movie info used for cards and lists
 */
export interface MovieSummary {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

/**
 * Full movie details returned by the ID endpoint
 * (e.g., ?i=tt0372784&plot=full)
 */
export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

/**
 * Sub-interface for different rating sources (IMDb, Rotten Tomatoes, etc.)
 */
export interface Rating {
  Source: string;
  Value: string;
}

/**
 * Helper enum for categories used in search (Optional)
 */
export enum MovieCategory {
  Action = 'action',
  Drama = 'drama',
  Comedy = 'comedy',
  Thriller = 'thriller'
}
