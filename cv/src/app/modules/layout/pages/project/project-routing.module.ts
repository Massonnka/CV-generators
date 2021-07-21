import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./project-info/project-info.module').then(
        (m) => m.ProjectInfoModule),
  },
  {
    path: ':user',
    loadChildren: () =>
      import('./project-profile/project-profile.module').then(
        (m) => m.ProjectProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
