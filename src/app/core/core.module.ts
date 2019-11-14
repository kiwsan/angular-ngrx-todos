import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SharedModule } from "../shared/shared.module";
import { NotificationService } from "./notifications/notification.service";

export { NotificationService };

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedModule]
})
export class CoreModule {}
