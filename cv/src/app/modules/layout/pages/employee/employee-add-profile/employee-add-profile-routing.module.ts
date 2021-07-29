import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddProfileComponent } from './employee-add-profile.component';

const routes: Routes = [{ path: '', component: EmployeeAddProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeAddProfileRoutingModule { }
