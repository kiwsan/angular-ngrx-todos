import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../../../features/todo/todo-state';
import * as fromTheme from '../../../reducers/theme/theme.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private store: Store<TodosState>) {
    }

    ngOnInit() {
    }

    onSetTheme(theme) {
        this.store.dispatch(new fromTheme.SetCurrentTheme({theme}));
    }
}
