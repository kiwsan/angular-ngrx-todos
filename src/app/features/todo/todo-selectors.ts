import { createSelector } from "@ngrx/store";
import { selectTodos, TodosState } from "./todo-state";

// Todo items
export const selectTodoItems = createSelector(
  selectTodos,
  (state: TodosState) => state.todos
);

export const getTodos = createSelector(selectTodoItems, item => {
  return item;
});

// Todo filters
export const selectCurrentFilter = createSelector(
  selectTodos,
  (state: TodosState) => state.currentFilter
);

export const getCurrentFilter = createSelector(selectCurrentFilter, filter => {
  return filter;
});

// Todo errors
export const selectErrors = createSelector(
  selectTodos,
  (state: TodosState) => state.errors
);

export const getErrors = createSelector(selectErrors, errors => {
  return errors;
});
