import {Todo} from '../models/todo-model';
import {TodoActions, TodoActionTypes} from './todo.actions';

const initialState: Array<Todo> = [
    {
        id: 1,
        text: 'Hello world!',
        completed: false
    },
    {
        id: 2,
        text: 'The standard Lorem Ipsum passage, used since the 1500s\n',
        completed: false
    },
    {
        id: 3,
        text: 'Section 1.10.32 of "de Finibus Bonorum et Malorum"',
        completed: false
    },
    {
        id: 4,
        text: 'Section 1.10.33 of "de Finibus Bonorum et Malorum"',
        completed: false
    }
];

const reducer = (state = initialState, action: TodoActions): Array<Todo> => {
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

export function todosReducer(state: Array<Todo> | undefined, action: TodoActions) {
    return reducer(state, action);
}


