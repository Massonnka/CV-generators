import { createReducer, on, Action } from '@ngrx/store';
import { Employee } from 'src/app/core/interfaces/employees.interface';

import * as EmployeeActions from './employee.actions';

export const employeeFeatureKey = 'employees';

export interface ProjectsState {
  employees: Employee[];
}
const initialState: ProjectsState = {
  employees: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.setEmployee, (state, { employees }) => {
    return {
      ...state,
      employees: employees,
    };
  })
);
