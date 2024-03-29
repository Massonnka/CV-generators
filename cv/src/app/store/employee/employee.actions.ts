import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/shared/interfaces/employees.interface';

export const setEmployee = createAction(
  '[Employee] Set Employees',
  props<{ employees: Employee[] }>()
);
