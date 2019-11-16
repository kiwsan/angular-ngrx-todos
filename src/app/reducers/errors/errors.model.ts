import { Action } from '@ngrx/store';

export interface BaseError {
  message: string;
}

export interface Errors {
  errors: Array<BaseError>;
}

export interface ErrorAction extends Action {
  errors: Array<BaseError>;
}
