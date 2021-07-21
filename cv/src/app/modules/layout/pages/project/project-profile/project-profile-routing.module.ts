import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectProfileComponent } from './project-profile.component';

const routes: Routes = [{ path: '', component: ProjectProfileComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProjectProfileRoutingModule { }