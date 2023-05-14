import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { employeeFeatureKey } from './employee.reducers';

const selectEmployees = createFeatureSelector(employeeFeatureKey);

export const selectProject = createSelector(
  selectEmployees,
  (state) => state as Employee
);
