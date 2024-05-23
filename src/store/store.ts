import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reduxLogger from 'redux-logger';
import { getMovieListEpic, movieListSlice } from './movieList';

// TODO: proper typings
// type RootActions = {};
// export type RootState = {} ;

const makeStore = () => {
  // TODO:
  // const epicMiddleware = createEpicMiddleware<RootActions, RootActions, any>();
  const epicMiddleware = createEpicMiddleware<any, any, any>();

  const rootEpic = combineEpics(getMovieListEpic);

  const rootSlices = combineSlices(movieListSlice);

  const store = configureStore({
    reducer: rootSlices,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxLogger, epicMiddleware), // TODO: make sure that redux-logger works only in dev env
  });

  epicMiddleware.run(rootEpic);
  return store;
};

export const store = makeStore();
