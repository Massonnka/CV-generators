import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { GlobalHeaderModule } from '../../../global-header/global-header.module';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, EmployeeRoutingModule, GlobalHeaderModule],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
