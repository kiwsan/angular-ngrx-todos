import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo-model';

import * as fromTodos from '../../store/todo.actions';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todo-state';

@Component({
    selector: 'app-todo-editor',
    templateUrl: './todo-editor.component.html',
    styleUrls: ['./todo-editor.component.scss']
})
export class TodoEditorComponent implements OnInit {

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
    }

    private addTodo(input) {
        if (input.value.length === 0) {
            return;
        }
        this.store.dispatch(
            new fromTodos.AddTodo(
                {
                    text: input.value,
                    completed: false
                } as Todo
            )
        );

        input.value = '';
    }
}
