import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from './todo-state';
import {Observable} from 'rxjs';
import {BaseError} from 'src/app/reducers/errors/errors.model';
import {getErrors} from './todo-selectors';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    errors: Observable<Array<BaseError>>;

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
        // errors
        this.errors = this.store.select(getErrors);
    }
}
