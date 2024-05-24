import { ActionCreatorWithPayload, createSlice } from '@reduxjs/toolkit';
import { OMDbSearchParamsMap, OMDbSearchResponse } from '@/utils/omdbTypes';
import { ErrorResponse, FetchState, SliceActionType } from '@/utils/types';

const initialState: FetchState<OMDbSearchResponse, OMDbSearchParamsMap> = {
  data: undefined,
  error: undefined,
  isLoading: undefined,
  // params: { search: 'man' }, // FIXME: testing only
  params: undefined,
};

export const MOVIE_LIST = 'MOVIE_LIST';

export const movieListSlice = createSlice({
  name: MOVIE_LIST,
  initialState,
  reducers: {
    request: (state, action) => ({
      ...state,
      params: { ...state.params, ...action.payload } as OMDbSearchParamsMap,
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
    movieListSearchParam: state => state.params?.search,
    movieListStatus: state => state.isLoading,
    movieListTotalResults: state => state.data?.totalResults,
    movieListError: state => (state.error as ErrorResponse)?.Error,
  },
});

export const movieListAction = movieListSlice.actions;
export type MovieListActionType = SliceActionType<
  typeof movieListAction,
  OMDbSearchParamsMap | OMDbSearchResponse | ErrorResponse
>;
export const movieListRequestAction: ActionCreatorWithPayload<
  Partial<OMDbSearchParamsMap>,
  'MOVIE_LIST/request'
> = movieListSlice.actions.request;

export const movieListSelector = movieListSlice.selectors;

export const movieListReducer = movieListSlice.reducer;
export type MovieListState = { [MOVIE_LIST]: ReturnType<typeof movieListReducer> };
