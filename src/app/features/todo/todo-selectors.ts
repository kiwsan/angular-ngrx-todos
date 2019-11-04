import {createSelector} from '@ngrx/store';
import {selectTodos, TodosState} from './todo-state';

export const selectTodoItems = createSelector(
    selectTodos,
    (state: TodosState) => state.todos
);

export const getTodos = createSelector(
    selectTodoItems,
    (item) => {
        return item;
    }
);
