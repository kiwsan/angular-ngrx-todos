import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { TemplatesRoutingModule } from "./templates-routing.module";
import { TemplatesComponent } from './templates.component';

@NgModule({
  declarations: [TemplatesComponent],
  imports: [CommonModule, SharedModule, TemplatesRoutingModule]
})
export class TemplatesModule {}
