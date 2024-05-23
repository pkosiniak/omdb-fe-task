import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
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

export type ActionType<A extends Record<string, ActionCreatorWithPayload<P>>, P = any> = ReturnType<A[keyof A]>;
