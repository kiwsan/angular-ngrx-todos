import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {Theme} from './theme/theme.model';
import * as currentTheme from './theme/theme.reducer';

// tslint:disable-next-line:no-empty-interface
export interface AppState extends Theme {

}

export const reducers: ActionReducerMap<AppState> = {
    currentTheme: currentTheme.themeReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const selectApp = (state: AppState) => state;

