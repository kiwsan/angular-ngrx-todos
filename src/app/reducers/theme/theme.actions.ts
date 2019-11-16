import {Action} from '@ngrx/store';

export enum CurrentThemeActionTypes {
    SetCurrentTheme = '[Theme] Set current theme'
}

export class SetCurrentTheme implements Action {
    readonly type = CurrentThemeActionTypes.SetCurrentTheme;

    constructor(public payload: { theme: string }) {
    }
}

export type CurrentThemeActions = SetCurrentTheme;
