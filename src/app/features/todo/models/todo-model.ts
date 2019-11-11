export interface Todo {
  id: number;
  completed: boolean;
  selected: boolean;
  text: string;
}

export interface Todos {
  todos: Array<Todo>;
}
