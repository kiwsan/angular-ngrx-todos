import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/todo-model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { TodosState } from "../../todo-state";
import { getTodos, getCurrentFilter } from "../../todo-selectors";
import * as fromTodos from "../../store/todo.actions";
import { NotificationService } from "src/app/core/core.module";

@Component({
  selector: "app-todo-container-item",
  templateUrl: "./todo-container-item.component.html",
  styleUrls: ["./todo-container-item.component.scss"]
})
export class TodoContainerItemComponent implements OnInit {
  currentFilter;
  todos: Observable<Todo[]>;

  constructor(
    private store: Store<TodosState>,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    //items
    this.todos = this.store.select(getTodos);
    //filters
    this.store.select(getCurrentFilter).subscribe(filter => {
      this.currentFilter = filter;
    });
  }

  onToggleTodo(todo: Todo) {
    this.store.dispatch(
      new fromTodos.ToggleTodo({
        id: todo.id
      })
    );

    this.notificationService.info("Toggle");
  }
}
