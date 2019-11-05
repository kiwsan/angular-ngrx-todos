import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo-model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todo-state';
import {getTodos} from '../../todo-selectors';

@Component({
    selector: 'app-todo-container-item',
    templateUrl: './todo-container-item.component.html',
    styleUrls: ['./todo-container-item.component.scss'],
})
export class TodoContainerItemComponent implements OnInit {

    todos: Observable<Todo[]>;

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
        this.todos = this.store.select(getTodos);

        console.log(this.todos);
    }

    onToggleTodo(todo: Todo) {
        console.log(todo);
    }
}
