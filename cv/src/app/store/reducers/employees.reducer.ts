import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from '../actions/employee.actions';

import { Employee } from 'src/app/models/employees.interface';

export interface State {
  ids: number[];
  employees: { [id: number]: Employee };
  selected: number | null;
}

export const initialState: State = {
  ids: [1, 2, 3],
  employees: {
    1: {
        firstname: 'Vasya',
        lastname: 'Pupkin',
        email: 'v.pupkin@gmail.com',
        department: 'Javascript',
        specialization: 'Angular',
        id: 1,
    },
    2: {
        firstname: 'Vasya',
        lastname: 'Pupkin',
        email: 'v.pupkin@gmail.com',
        department: 'Javascript',
        specialization: 'Angular',
        id: 2,
    },
    3: {
        firstname: 'Vasya',
        lastname: 'Pupkin',
        email: 'v.pupkin@gmail.com',
        department: 'Javascript',
        specialization: 'Angular',
        id: 3,
    },
  },
  selected: null,
};

const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.selectEmployee, state => ({...state, selected: state.selected}))
)

export function reducer(state: State | undefined, action: Action) {
  return employeeReducer(state, action);
}