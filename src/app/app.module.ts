import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';

@NgModule({
    declarations: [
        AppComponent
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
