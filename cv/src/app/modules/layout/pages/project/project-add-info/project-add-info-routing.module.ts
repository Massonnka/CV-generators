import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectAddInfoComponent } from './project-add-info.component';

const routes: Routes = [{ path: '', component: ProjectAddInfoComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectAddInfoRoutingModule { }