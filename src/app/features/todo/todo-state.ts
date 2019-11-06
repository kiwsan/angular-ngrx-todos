import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import {Todos} from './models/todo-model';
import * as todos from './store/todo.reducer';

// tslint:disable-next-line:no-empty-interface
export interface TodosState extends Todos {
}

export const FEATURE_NAME = 'todo';
export const reducers: ActionReducerMap<TodosState> = {
    todos: todos.todosReducer
};

export const selectTodos = createFeatureSelector<TodosState>(
    FEATURE_NAME
);
