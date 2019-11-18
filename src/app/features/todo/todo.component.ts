import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from './todo-state';
import {Observable} from 'rxjs';
import {BaseError} from 'src/app/reducers/errors/errors.model';
import {getErrors} from './todo-selectors';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/core/animations/route.animations';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    errors: Observable<Array<BaseError>>;

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
        // errors
        this.errors = this.store.select(getErrors);
    }
}
