import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { NotificationService } from "./notifications/notification.service";
import { MatGridListModule, MatRippleModule } from "@angular/material";
import { routeAnimations } from "./animations/route.animations";

export { NotificationService, routeAnimations };

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule, MatGridListModule, MatRippleModule]
})
export class CoreModule {}
