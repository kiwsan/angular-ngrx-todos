import {CurrentThemeActions, CurrentThemeActionTypes} from './theme.actions';

export const initialState = 'default-theme';

export function reducer(
    state = initialState,
    action: CurrentThemeActions
): string {
    switch (action.type) {
        case CurrentThemeActionTypes.SetCurrentTheme:
            return action.payload.theme;
        default:
            return state;
    }
}

export function themeReducer(state: string, action: CurrentThemeActions) {
    return reducer(state, action);
}
