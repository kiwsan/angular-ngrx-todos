import {Todo} from '../models/todo-model';
import {TodoActions, TodoActionTypes} from './todo.actions';

export const initialState: Array<Todo> = [];
export const reducer = (state = initialState, action: TodoActions): Array<Todo> => {
    switch (action.type) {
        case TodoActionTypes.AddTodo:
            const model = state.concat({
                id: action.payload.id,
                text: action.payload.text,
                completed: action.payload.completed
            } as Todo);

            console.log(model);

            return model;
        case TodoActionTypes.ToggleTodo:
            return state.map(todo => {
                if (todo.id !== action.payload.id) {
                    return todo;
                }
                return {
                    id: todo.id,
                    text: todo.text,
                    completed: !todo.completed
                };
            });
        case TodoActionTypes.DeleteTodo:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};
