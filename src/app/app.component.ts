import { Component, HostBinding, OnInit } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { Store } from "@ngrx/store";
import { TodosState } from "./features/todo/todo-state";
import { getCurrentTheme } from "./reducers/app.selectors";
import { routeAnimations } from "./core/animations/route.animations";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  title = "angular-ngrx-todo";
  @HostBinding("class") componentCssClass;
  options: FormGroup;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<TodosState>,
    fb: FormBuilder
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.store.select(getCurrentTheme).subscribe(theme => {
      this.onSetTheme(theme);
    });
  }

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
