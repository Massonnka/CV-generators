import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddProfileComponent } from './employee-add-profile/employee-add-profile.component';
import { EmployeeInfoProfileComponent } from './employee-info-profile/employee-info-profile.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
  {
    path: 'addinfo',
    component: EmployeeAddProfileComponent,
  },
  {
    path: ':user',
    component: EmployeeInfoProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
