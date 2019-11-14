import { ErrorsActions, ErrorsActionTypes } from "./errors.actions";

export const initialState: Array<any> = [
  {
    message: "Hello"
  }
];

export const reducer = (state = initialState, action: ErrorsActions) => {
  switch (action.type) {
    case ErrorsActionTypes.SetError:
      return state.concat(action.payload.error);
    default:
      return state;
  }
};

export function errorsReducer(state: Array<any>, action: ErrorsActions) {
  return reducer(state, action);
}
