import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo-model';

import * as fromTodos from '../../store/todo.actions';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todo-state';

@Component({
    selector: 'app-container-todo-editor',
    templateUrl: './todo-container-editor.component.html',
    styleUrls: ['./todo-container-editor.component.scss']
})
export class TodoContainerEditorComponent implements OnInit {
    todoValue = '';

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
    }

    get isAddTodoDisabled() {
        return this.todoValue.length < 4;
    }

    onNewTodoChange(todoValue: string) {
        this.todoValue = todoValue;
    }

    onNewTodoClear() {
        this.todoValue = '';
    }

    onAddTodo() {
        this.store.dispatch(
            new fromTodos.AddTodo(
                {
                    text: this.todoValue,
                    completed: false
                } as Todo
            )
        );

        this.todoValue = '';
    }
}
