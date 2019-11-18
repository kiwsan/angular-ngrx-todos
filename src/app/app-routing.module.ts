import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "todos",
    pathMatch: "full"
  },
  {
    path: "todos",
    loadChildren: () =>
      import("./features/todo/todo.module").then(m => m.TodoModule)
  },
  {
    path: "templates",
    loadChildren: () =>
      import("./features/templates/templates.module").then(
        m => m.TemplatesModule
      )
  },
  {
    path: "**",
    redirectTo: "todos"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
