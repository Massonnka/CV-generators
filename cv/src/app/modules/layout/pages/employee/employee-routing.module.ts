import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
  },
  {
    path: 'addinfo',
    loadChildren: () =>
      import('./employee-add-profile/employee-add-profile.module').then(
        (m) => m.EmployeeAddProfileModule
      ),
    data: { breadcrumb: { alias: 'EmployeeProfile' } },
  },
  {
    path: ':user',
    loadChildren: () =>
      import('./employee-info-profile/employee-info-profile.module').then(
        (m) => m.EmployeeInfoProfileModule
      ),
    data: { breadcrumb: { alias: 'EmployeeProfile' } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
