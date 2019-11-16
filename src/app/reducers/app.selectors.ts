// Theme
import {createSelector} from '@ngrx/store';
import {selectApp, AppState} from './app.state';

export const selectCurrentTheme = createSelector(
    selectApp,
    (state: AppState) => state.currentTheme
);

export const getCurrentTheme = createSelector(selectCurrentTheme, theme => {
    return theme;
});
