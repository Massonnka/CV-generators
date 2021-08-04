import { createAction, props } from '@ngrx/store';

export const setTheme = createAction('[Sider] Set theme', props<{theme: string}>());