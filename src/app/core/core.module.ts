import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatToolbarModule
    ]
})
export class CoreModule {
}
