import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AutocompleteOption } from '@/utils/types';
import { MOVIE_LIST, MovieListActionType, MovieListState, movieListAction } from '../movieList/slice';
import {
  AUTOCOMPLETE_HISTORY,
  AutocompleteHistoryAction,
  AutocompleteHistoryState,
  autocompleteHistoryAction,
} from './slice';

export const updateAutocompleteHistoryEpic: Epic<
  MovieListActionType | AutocompleteHistoryAction,
  MovieListActionType | AutocompleteHistoryAction,
  MovieListState & AutocompleteHistoryState
> = (action$, state$) =>
  action$.pipe(
    ofType(movieListAction.success.type, movieListAction.failure.type),
    mergeMap(() => {
      const search = state$.value[MOVIE_LIST].params?.search;
      const next =
        search && !state$.value[AUTOCOMPLETE_HISTORY].history.some(history => history.value === search)
          ? autocompleteHistoryAction.push({ value: search, label: search } as AutocompleteOption)
          : autocompleteHistoryAction.noUpdate(undefined);
      return of(next);
    })
  );
