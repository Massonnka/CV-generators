import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvInfoComponent } from './cv-info/cv-info.component';
import { EmployeeInfoProfileComponent } from './employee-info-profile.component';

const routes: Routes = [
  {
    path: ':user',
    component: EmployeeInfoProfileComponent,
    children: [
      {
        path: 'cv',
        component: CvInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeInfoRoutingModule {}
