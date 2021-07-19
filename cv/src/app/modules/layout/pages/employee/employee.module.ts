import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { GlobalHeaderModule } from '../../../global-header/global-header.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    GlobalHeaderModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TranslateModule,
  ],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
