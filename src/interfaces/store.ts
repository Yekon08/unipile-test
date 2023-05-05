import { MovieInterface } from "./movies";

export interface SearchMoviesInterface {
  Search: MovieInterface[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface GlobalStateInterface {
  loading: boolean;
  searchMovies: SearchMoviesInterface;
  error: string | undefined;
}
