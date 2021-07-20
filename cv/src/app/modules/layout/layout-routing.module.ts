import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'employee',
        loadChildren: () =>
          import('./pages/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./pages/project/project.module').then((m) => m.ProjectModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
