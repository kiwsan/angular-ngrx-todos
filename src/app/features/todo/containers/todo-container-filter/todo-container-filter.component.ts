import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodosState } from "../../todo-state";
import * as fromFilter from "../../../../reducers/filter/filter.actions";

@Component({
  selector: "app-todo-container-filter",
  templateUrl: "./todo-container-filter.component.html",
  styleUrls: ["./todo-container-filter.component.scss"]
})
export class TodoContainerFilterComponent implements OnInit {
  constructor(private store: Store<TodosState>) {}

  ngOnInit() {}

  onApplyFilter(filter) {
    this.store.dispatch(new fromFilter.SetCurrentFilter({ filter }));
  }
}
