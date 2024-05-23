import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OMDbErrorResponse, OMDbSearchParams, OMDbSearchResponse, OMDbResponse } from '@/utils/omdbTypes';
import { ErrorResponse } from '@/utils/types';
import { httpClient } from '@/utils/utils';
import { MovieListActionType, movieListAction } from './slice';

const getList = (params?: OMDbSearchParams) => {
  if (!params)
    return of({ Response: OMDbResponse.FAILURE, Error: 'No empty params', validationError: true } as ErrorResponse);

  const { search, type, page, year } = params;

  const reduced = {
    s: search,
    t: type,
    y: year,
    p: page,
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

export const getMovieListEpic: Epic<MovieListActionType, MovieListActionType> = action$ =>
  action$.pipe(
    ofType(movieListAction.request.type),
    mergeMap(action =>
      getList(action.payload).pipe(
        map(result => {
          if (result.Response !== OMDbResponse.SUCCESS) return movieListAction.failure(result);
          return movieListAction.success(result);
        })
      )
    )
  );
