import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoProfileComponent } from './employee-info-profile.component';

const routes: Routes = [{ path: '', component: EmployeeInfoProfileComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeInfoProfileRoutingModule { }
