import { createAction, props } from '@ngrx/store';

export const addEmployee = createAction(
  'add employee',
  props<{
    firstname: string;
    lastname: string;
    email: string;
    department: string;
    specialization: string;
    id: number;
  }>()
);

export const selectEmployee = createAction(
  'select employee',
  props<{
    id: number;
  }>()
);
