import {
  CurrentFilterActions,
  CurrentFilterActionTypes
} from "./filter.actions";
import { reducers } from "src/app/features/todo/todo-state";

export const initialState: string = "SHOW_ALL";

export function reducer(
  state = initialState,
  action: CurrentFilterActions
): string {
  switch (action.type) {
    case CurrentFilterActionTypes.SetCurrentFilter:
      return action.payload.filter;
    default:
      return state;
  }
}

export function filterReducer(state: string, action: CurrentFilterActions) {
  return reducer(state, action);
}
