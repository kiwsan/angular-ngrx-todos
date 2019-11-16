import { Action } from '@ngrx/store';
import { Todo } from '../models/todo-model';
import { MockTodos } from './todo.mocks';

export enum TodoActionTypes {
  AddTodo = '[Todo] Add Todo',
  ToggleTodo = '[Todo] Toggle Todo',
  DeleteTodo = '[Todo] Delete Todo',
  DoneTodo = '[Todo] Done Todo'
}

let currentId = MockTodos.length + 1;

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  id: number;

  constructor(public payload: Todo) {
    payload.id = currentId++;
  }
}

export class ToggleTodo implements Action {
  readonly type = TodoActionTypes.ToggleTodo;

  constructor(public payload: { id: number }) {}
}

export class DoneTodo implements Action {
  readonly type = TodoActionTypes.DoneTodo;

  constructor(public payload: { id: number }) {}
}

export class DeleteTodo implements Action {
  readonly type = TodoActionTypes.DeleteTodo;

  constructor(public payload: { id: number }) {}
}

export type TodoActions = AddTodo | ToggleTodo | DeleteTodo | DoneTodo;
