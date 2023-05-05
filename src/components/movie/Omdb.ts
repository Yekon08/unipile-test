export class Omdb {
  async searchMovies(movie: string) {
    const fetchData = async (movie: string) => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=23aaa32&s=${movie}`
      );
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return response.json();
      }
    };
    return await fetchData(movie);
  }
}
