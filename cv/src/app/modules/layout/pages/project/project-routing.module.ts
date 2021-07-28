import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'addinfo',
    loadChildren: () =>
      import('./project-add-info/project-add-info.module').then(
        (m) => m.ProjectAddInfoModule
      ),
    data: { breadcrumb: { alias: 'ProjectInfo' } },
  },
  {
    path: ':project',
    loadChildren: () =>
      import('./project-info/project-info.module').then(
        (m) => m.ProjectInfoModule
      ),
    data: { breadcrumb: { alias: 'ProjectInfo' } },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }
