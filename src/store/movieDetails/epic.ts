import { Epic, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  OMDbErrorResponse,
  OMDbResponse,
  OMDbDetailsParamsMap,
  OMDbDetailsParams,
  OMDbDetailsResponse,
} from '@/utils/omdbTypes';
import { ErrorResponse } from '@/utils/types';
import { httpClient } from '@/utils/utils';
import { MOVIE_DETAILS, MovieDetailsActionType, MovieDetailsState, movieDetailsAction } from './slice';

const getDetails = (params?: OMDbDetailsParamsMap) => {
  if (!params || !params.id)
    return of({ Response: OMDbResponse.FAILURE, Error: 'No empty params', validationError: true } as ErrorResponse);

  const { id, type, title, year, plot } = params;

  const reduced: OMDbDetailsParams = {
    i: id,
    t: title,
    type,
    y: year,
    plot,
  };

  return httpClient()
    .get<OMDbDetailsResponse | OMDbErrorResponse>(reduced)
    .pipe(
      map(({ data, status }) => {
        if (status !== 200 || data.Response !== OMDbResponse.SUCCESS) throw data;
        return data;
      }),
      catchError(error => of({ ...(error as OMDbErrorResponse), Response: OMDbResponse.FAILURE }))
    );
};

export const getMovieDetailsEpic: Epic<MovieDetailsActionType, MovieDetailsActionType, MovieDetailsState> = (
  action$,
  state$
) =>
  action$.pipe(
    ofType(movieDetailsAction.request.type),
    mergeMap(() =>
      getDetails(state$.value[MOVIE_DETAILS].params).pipe(
        map(result => {
          if (result.Response !== OMDbResponse.SUCCESS) return movieDetailsAction.failure(result);
          return movieDetailsAction.success(result);
        })
      )
    )
  );
