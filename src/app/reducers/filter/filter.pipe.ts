import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "visibleTodos"
})
export class VisibleTodosPipe implements PipeTransform {
  transform(item, filter) {
    if (!item) return;

    let todos = item.slice().reverse();
    switch (filter) {
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ALL":
      default:
        return todos;
    }
  }
}
