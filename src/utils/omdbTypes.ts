export enum OMDbResponse {
  SUCCESS = 'True',
  FAILURE = 'False',
}

export interface OMDbErrorResponse {
  Response: OMDbResponse;
  Error: string;
}

export enum MovieType {
  MOVIE = 'movie',
  SERIES = 'series',
  EPISODE = 'episode',
}

export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: MovieType;
  Poster: string;
}

export type OMDbSearchResponse = {
  Search: IMovie[];
  totalResults: string | number;
  Response: OMDbResponse;
};

export type OMDbSearchParams = {
  search: string;
  type?: MovieType;
  year?: string | number;
  page?: number;
};
