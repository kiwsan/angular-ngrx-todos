import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatMenuModule
} from "@angular/material";

import { XsInputComponent } from "./xs-input/xs-input/xs-input.component";
import { XsInputActionComponent } from "./xs-input/xs-input-action/xs-input-action.component";
import { MdInputActionComponent } from "./md-input/md-input-action/md-input-action.component";
import { LgInputActionComponent } from "./lg-input/lg-input-action/lg-input-action.component";
import { LgInputComponent } from "./lg-input/lg-input/lg-input.component";
import { MdInputComponent } from "./md-input/md-input/md-input.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faClipboardCheck
);

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
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
