import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";

import { XsInputComponent } from "./xs-input/xs-input/xs-input.component";
import { XsInputActionComponent } from "./xs-input/xs-input-action/xs-input-action.component";
import { MdInputActionComponent } from "./md-input/md-input-action/md-input-action.component";
import { LgInputActionComponent } from "./lg-input/lg-input-action/lg-input-action.component";
import { LgInputComponent } from "./lg-input/lg-input/lg-input.component";
import { MdInputComponent } from "./md-input/md-input/md-input.component";
import {
  FaIconLibrary,
  FontAwesomeModule
} from "@fortawesome/angular-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { MatCheckboxModule } from "@angular/material/checkbox";

const Vendors = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatToolbarModule
];

const Components = [
  XsInputComponent,
  XsInputActionComponent,
  MdInputActionComponent,
  LgInputActionComponent,
  LgInputComponent,
  MdInputComponent
];

@NgModule({
  declarations: [Components],
  imports: [CommonModule, FontAwesomeModule, Vendors],
  exports: [Vendors, Components, FontAwesomeModule]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
