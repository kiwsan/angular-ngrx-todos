import { Action } from '@ngrx/store';

export enum ErrorsActionTypes {
  SetError = '[Errors] Set error'
}

export class SetError implements Action {
  readonly type = ErrorsActionTypes.SetError;

  constructor(public payload: { error: string }) {}
}

export type ErrorsActions = SetError;
