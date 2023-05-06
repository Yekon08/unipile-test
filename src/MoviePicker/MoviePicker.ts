/**
 *
 */

import { MoviePickRepo } from "./MoviePickRepo";

export class MoviePickAlreadyExistError extends Error {
  constructor(err: string) {
    super(err);
    console.log(err);
  }
}

export class EmptyMovieTitleError extends Error {
  constructor(err: string) {
    super(err);
    console.log(err);
  }
}

export class MoviePicker {
  moviePickRepo: MoviePickRepo;

  constructor(moviePickRepo: MoviePickRepo) {
    this.moviePickRepo = moviePickRepo;
  }

  async pick(title: string) {
    const alreadyExist = await this.moviePickRepo.getByFirstLetter(
      title.charAt(0).toUpperCase()
    );

    if (!title.length) {
      throw new EmptyMovieTitleError("Empty title");
    }

    if (title.length > 0 && alreadyExist !== null) {
      throw new MoviePickAlreadyExistError(
        "This letter has already a favorite movie selected"
      );
    }

    if (title.length > 0 && alreadyExist === null) {
      this.moviePickRepo.put(title);
    }
  }
}
