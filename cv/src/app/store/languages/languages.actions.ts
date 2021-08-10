import { createAction, props } from '@ngrx/store';;

export const setLanguage = createAction(
  '[Employee] Set Language',
  props<{ language: string }>()
);
