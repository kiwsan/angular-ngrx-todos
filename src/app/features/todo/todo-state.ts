import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import { Todos } from "./models/todo-model";
import * as todos from "./store/todo.reducer";
import { Filter } from "../../reducers/filter/filter.model";
import * as currentFilter from "../../reducers/filter/filter.reducer";
import { Errors } from "src/app/reducers/errors/errors.model";
import * as errors from "../../reducers/errors/errors.reducer";

// tslint:disable-next-line:no-empty-interface
export interface TodosState extends Todos, Filter, Errors {}

export const FEATURE_NAME = "todo";
export const reducers: ActionReducerMap<TodosState> = {
  todos: todos.todosReducer,
  currentFilter: currentFilter.filterReducer,
  errors: errors.errorsReducer
};

export const selectTodos = createFeatureSelector<TodosState>(FEATURE_NAME);
