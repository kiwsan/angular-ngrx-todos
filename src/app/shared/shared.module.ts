import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";

import { XsInputComponent } from "./xs-input/xs-input/xs-input.component";
import { XsInputActionComponent } from "./xs-input/xs-input-action/xs-input-action.component";
import { MdInputActionComponent } from "./md-input/md-input-action/md-input-action.component";
import { LgInputActionComponent } from "./lg-input/lg-input-action/lg-input-action.component";
import { LgInputComponent } from "./lg-input/lg-input/lg-input.component";
import { MdInputComponent } from "./md-input/md-input/md-input.component";

@NgModule({
  declarations: [
    XsInputComponent,
    XsInputActionComponent,
    MdInputActionComponent,
    LgInputActionComponent,
    LgInputComponent,
    MdInputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatIconModule]
})
export class SharedModule {}
