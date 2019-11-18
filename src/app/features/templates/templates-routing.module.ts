import { Routes, RouterModule } from "@angular/router";
import { TemplatesComponent } from "./templates.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: TemplatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {}
