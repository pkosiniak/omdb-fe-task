import { createSlice } from '@reduxjs/toolkit';
import { OMDbSearchParams, OMDbSearchResponse } from '@/utils/omdbTypes';
import { ActionType, ErrorResponse, FetchState } from '@/utils/types';

const initialState: FetchState<OMDbSearchResponse, OMDbSearchParams> = {
  data: undefined,
  error: undefined,
  isLoading: undefined,
  params: undefined,
};

export const MOVIE_LIST = 'MOVIE_LIST';

export const movieListSlice = createSlice({
  name: MOVIE_LIST,
  initialState,
  reducers: {
    request: (state, action) => ({
      ...state,
      params: action.payload as OMDbSearchParams,
      error: undefined,
      isLoading: true,
    }),
    success: (state, action) => ({
      ...state,
      data: action.payload as OMDbSearchResponse,
      isLoading: false,
      error: undefined,
    }),
    failure: (state, action) => ({ ...state, isLoading: false, error: action.payload as ErrorResponse }),
  },
  selectors: {
    movieList: state => state.data?.Search,
    movieListStatus: state => state.isLoading,
  },
});

export const movieListAction = movieListSlice.actions;
export type MovieListActionType = ActionType<
  typeof movieListAction,
  OMDbSearchParams | OMDbSearchResponse | ErrorResponse
>;

export const movieListSelector = movieListSlice.selectors;

export const movieListReducer = movieListSlice.reducer;
