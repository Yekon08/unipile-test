import { MovieDetailsInterface, MovieInterface } from "../interfaces/movies";
import { SearchMoviesInterface } from "../interfaces/store";

export class Omdb {
  async searchMovies(movie: string) {
    const fetchData = async (movie: string): Promise<SearchMoviesInterface> => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=23aaa32&s=${movie}`
      );
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return response.json() as Promise<SearchMoviesInterface>;
      }
    };

    const data = await fetchData(movie);
    return data;
  }

  async searchMovieId(id: string) {
    const fetchData = async (id: string): Promise<MovieDetailsInterface> => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=23aaa32&i=${id}`
      );
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return response.json() as Promise<MovieDetailsInterface>;
      }
    };

    const data = await fetchData(id);
    return data;
  }
}
