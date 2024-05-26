import { createSlice } from '@reduxjs/toolkit';
import { AutocompleteOption, SliceActionType } from '@/utils/types';

export type AutocompleteHistoryInitState = {
  history: AutocompleteOption[];
};

const initialState: AutocompleteHistoryInitState = {
  history: [],
};

export const AUTOCOMPLETE_HISTORY = 'AUTOCOMPLETE_HISTORY';

export const autocompleteHistorySlice = createSlice({
  name: AUTOCOMPLETE_HISTORY,
  initialState,
  reducers: {
    push: (state, action) => ({ ...state, history: [action.payload, ...state.history].splice(0, 10) }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    noUpdate: (state, _) => state,
  },
  selectors: {
    history: state => state.history,
  },
});

export const autocompleteHistoryAction = autocompleteHistorySlice.actions;
export type AutocompleteHistoryAction = SliceActionType<typeof autocompleteHistoryAction, AutocompleteOption>;

export type AutocompleteHistoryState = { [AUTOCOMPLETE_HISTORY]: ReturnType<typeof autocompleteHistorySlice.reducer> };

export const autocompleteHistorySelector = autocompleteHistorySlice.selectors;
