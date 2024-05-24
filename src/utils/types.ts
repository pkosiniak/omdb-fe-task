import { Action, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch, SetStateAction } from 'react';
import { OMDbErrorResponse } from './omdbTypes';

export type ErrorResponse = OMDbErrorResponse & {
  validationError?: boolean;
};

export type FetchState<T extends {}, P extends {}> = {
  data?: T;
  params?: P;
  isLoading?: boolean;
  error?: ErrorResponse | any;
};

export type ActionType<P, T extends string = string> = Action<T> & { payload: P}
export type SliceActionType<A extends Record<string, ActionCreatorWithPayload<P>>, P = any> = ReturnType<A[keyof A]>;

export type SetStateCallback<T> = Dispatch<SetStateAction<T>>;
