import { Todo } from "../models/todo-model";
import { TodoActions, TodoActionTypes } from "./todo.actions";
import { MockTodos } from "./todo.mocks";

const initialState: Array<Todo> = MockTodos;

const reducer = (state = initialState, action: TodoActions): Array<Todo> => {
  switch (action.type) {
    case TodoActionTypes.AddTodo:
      const model = state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: action.payload.completed
      } as Todo);

      return model;
    case TodoActionTypes.ToggleTodo:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          id: todo.id,
          text: todo.text,
          completed: todo.completed,
          selected: !todo.selected
        };
      });
    case TodoActionTypes.DoneTodo:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed,
          selected: todo.selected
        };
      });
    case TodoActionTypes.DeleteTodo:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export function todosReducer(
  state: Array<Todo> | undefined,
  action: TodoActions
) {
  return reducer(state, action);
}
