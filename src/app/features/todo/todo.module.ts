import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./todo.component";
import { HomeRoutingModule } from "./todo-routing.module";
import { TodoContainerEditorComponent } from "./containers/todo-container-editor/todo-container-editor.component";
import { TodoContainerItemComponent } from "./containers/todo-container-item/todo-container-item.component";
import { FEATURE_NAME, reducers } from "./todo-state";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/shared/shared.module";
import { TodoContainerFilterComponent } from "./containers/todo-container-filter/todo-container-filter.component";
import { VisibleTodosPipe } from 'src/app/reducers/filter/filter.pipe';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    TodoComponent,
    TodoContainerEditorComponent,
    TodoContainerItemComponent,
    TodoContainerFilterComponent,
    // pipes
    VisibleTodosPipe
  ],
  imports: [
    // vendor
    CommonModule,
    // local
    HomeRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    SharedModule
  ]
})
export class TodoModule {}
