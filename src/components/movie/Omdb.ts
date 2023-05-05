export class Omdb {
  async searchMovies(movie: string) {
    const fetchData = async () => {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=23aaa32&s=Matrix"
      );
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return response.json();
      }
    };
    return await fetchData();
  }
}
