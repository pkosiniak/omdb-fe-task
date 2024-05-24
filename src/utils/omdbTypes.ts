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

export type OMDbSearchParamsMap = {
  search: string;
  type?: MovieType;
  year?: string | number;
  page?: number;
};

export type OMDbSearchParams = {
  s: string;
  type?: MovieType;
  y?: string | number;
  page?: number;
};

export type Rating = {
  Source: string;
  Value: string;
};

export interface IDetails {
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
  Type: MovieType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export type OMDbDetailsResponse = IDetails & {
  Response: OMDbResponse;
};

export enum PlotType {
  SHORT = 'short',
  FULL = 'full',
}

export type OMDbDetailsParamsMap = {
  id: string;
  title?: string;
  type?: MovieType;
  year?: string | number;
  plot?: PlotType;
};

export type OMDbDetailsParams = {
  i: string;
  t?: string;
  type?: MovieType;
  y?: string | number;
  plot?: PlotType;
};
