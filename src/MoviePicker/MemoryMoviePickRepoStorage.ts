import { replacer, reviver } from "../utils";
import { MoviePickRepo } from "./MoviePickRepo";

/**
 *
 */
export class MemoryMoviePickRepoStorage implements MoviePickRepo {
  /**
   *
   */
  private readonly byFirstLetter = new Map<string, string>();

  /**
   *
   */
  constructor() {
    this.put = this.put.bind(this);
  }

  /**
   *
   */
  async getByFirstLetter(firstLetter: string) {
    return this.byFirstLetter.get(firstLetter.toUpperCase()) ?? null;
  }

  /**
   *
   */
  async getAll() {
    const data: Map<string, string> = JSON.parse(
      localStorage.getItem("moviePicks") as string,
      reviver
    ) as Map<string, string>;
    return [...data.values()];
  }

  /**
   *
   */
  async put(title: string) {
    if (title.length) {
      if (localStorage.getItem("moviePicks") === null) {
        const data = new Map<string, string>();
        data.set([...title][0].toUpperCase(), title);
        localStorage.setItem("moviePicks", JSON.stringify(data, replacer));
      } else {
        const data: Map<string, string> = JSON.parse(
          localStorage.getItem("moviePicks") as string,
          reviver
        ) as Map<string, string>;
        data.set([...title][0].toUpperCase(), title);
        localStorage.setItem("moviePicks", JSON.stringify(data, replacer));
      }
    }
  }
}
