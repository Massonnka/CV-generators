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
        data: { breadcrumb: { alias: 'Employee' } },
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./pages/project/project.module').then((m) => m.ProjectModule),
        data: { breadcrumb: { alias: 'Project' } },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
