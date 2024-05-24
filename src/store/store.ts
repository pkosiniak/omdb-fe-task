import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reduxLogger from 'redux-logger';
import { getMovieListEpic, movieListSlice } from './movieList';
import { getMovieDetailsEpic, movieDetailsSlice } from './movieDetails';
import { updateAutocompleteHistoryEpic, autocompleteHistorySlice } from './autocompleteHistory';

// TODO: types
// type RootActions = {};
// export type RootState = {} ;

const makeStore = () => {
  // TODO: types
  // const epicMiddleware = createEpicMiddleware<RootActions, RootActions, any>();
  const epicMiddleware = createEpicMiddleware<any, any, any>();

  // TODO: types
  const rootEpic = combineEpics<any, any, any>(getMovieListEpic, getMovieDetailsEpic, updateAutocompleteHistoryEpic);

  const rootSlices = combineSlices(movieListSlice, movieDetailsSlice, autocompleteHistorySlice);

  const store = configureStore({
    reducer: rootSlices,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger, epicMiddleware), // TODO: make sure that redux-logger works only in dev env
  });

  epicMiddleware.run(rootEpic);
  return store;
};

export const store = makeStore();
