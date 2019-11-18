import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers/app.state';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatesComponent } from './features/templates/templates.component';

@NgModule({
    declarations: [
        AppComponent,
        TemplatesComponent
    ],
    imports: [
        // vendor modules
        BrowserModule,
        // local modules
        AppRoutingModule,
        CoreModule,
        SharedModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        EffectsModule.forRoot([AppEffects]),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
