import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';


@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule {
}
