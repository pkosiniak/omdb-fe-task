import { ActionCreatorWithPayload, createSlice } from '@reduxjs/toolkit';
import { OMDbDetailsParamsMap, OMDbDetailsResponse } from '@/utils/omdbTypes';
import { ErrorResponse, FetchState, SliceActionType } from '@/utils/types';

const initialState: FetchState<OMDbDetailsResponse, OMDbDetailsParamsMap> = {
  data: undefined,
  error: undefined,
  isLoading: undefined,
  // params: { id: 'tt0371746' }, // FIXME: testing only
  params: undefined,
};

export const MOVIE_DETAILS = 'MOVIE_DETAILS';

export const movieDetailsSlice = createSlice({
  name: MOVIE_DETAILS,
  initialState,
  reducers: {
    request: (state, action) => ({
      ...state,
      params: { ...state.params, ...action.payload } as OMDbDetailsParamsMap,
      error: undefined,
      isLoading: true,
    }),
    success: (state, action) => ({
      ...state,
      data: action.payload as OMDbDetailsResponse,
      isLoading: false,
      error: undefined,
    }),
    failure: (state, action) => ({ ...state, isLoading: false, error: action.payload as ErrorResponse }),
  },
  selectors: {
    movieDetails: state => state.data,
    movieDetailsStatus: state => state.isLoading,
    movieDetailsError: state => (state.error as ErrorResponse)?.Error,
  },
});

export const movieDetailsAction = movieDetailsSlice.actions;
export type MovieDetailsActionType = SliceActionType<
  typeof movieDetailsAction,
  OMDbDetailsParamsMap | OMDbDetailsResponse | ErrorResponse
>;
export const movieDetailsRequestAction: ActionCreatorWithPayload<
  Partial<OMDbDetailsParamsMap>,
  'MOVIE_DETAILS/request'
> = movieDetailsSlice.actions.request;

export const movieDetailsSelector = movieDetailsSlice.selectors;

export const movieDetailsReducer = movieDetailsSlice.reducer;
export type MovieDetailsState = { [MOVIE_DETAILS]: ReturnType<typeof movieDetailsReducer> };
