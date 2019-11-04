import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {HomeRoutingModule} from './todo-routing.module';
import {TodoEditorComponent} from './containers/todo-editor/todo-editor.component';
import {TodoItemComponent} from './containers/todo-item/todo-item.component';
import {FEATURE_NAME, reducers} from './todo-state';
import {StoreModule} from '@ngrx/store';


@NgModule({
    declarations: [TodoComponent, TodoEditorComponent, TodoItemComponent],
    imports: [
        // vendor
        CommonModule,
        // local
        HomeRoutingModule,
        StoreModule.forFeature(FEATURE_NAME, reducers),
    ]
})
export class TodoModule {
}
