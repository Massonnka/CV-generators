import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAddInfoComponent } from './project-add-info/project-add-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'addinfo',
    component: ProjectAddInfoComponent,
  },
  {
    path: ':project',
    component: ProjectInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule { }
