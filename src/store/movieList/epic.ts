import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  OMDbErrorResponse,
  OMDbSearchParamsMap,
  OMDbSearchResponse,
  OMDbResponse,
  OMDbSearchParams,
} from '@/utils/omdbTypes';
import { ErrorResponse } from '@/utils/types';
import { httpClient } from '@/utils/utils';
import { MOVIE_LIST, MovieListActionType, MovieListState, movieListAction } from './slice';

const getList = (params?: OMDbSearchParamsMap) => {
  if (!params || !params.search)
    return of({ Response: OMDbResponse.FAILURE, Error: 'No empty params', validationError: true } as ErrorResponse);

  const { search, type, page, year } = params;

  const reduced: OMDbSearchParams = {
    s: search,
    type,
    y: year,
    page,
  };

  return httpClient()
    .get<OMDbSearchResponse | OMDbErrorResponse>(reduced)
    .pipe(
      map(({ data, status }) => {
        if (status !== 200 || data.Response !== OMDbResponse.SUCCESS) throw data;
        return data;
      }),
      catchError(error => of({ ...(error as OMDbErrorResponse), Response: OMDbResponse.FAILURE }))
    );
};

export const getMovieListEpic: Epic<MovieListActionType, MovieListActionType, MovieListState> = (action$, state$) =>
  action$.pipe(
    ofType(movieListAction.request.type),
    mergeMap(() =>
      getList(state$.value[MOVIE_LIST].params).pipe(
        map(result => {
          if (result.Response !== OMDbResponse.SUCCESS) return movieListAction.failure(result);
          return movieListAction.success(result);
        })
      )
    )
  );
