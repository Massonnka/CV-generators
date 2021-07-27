import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TableModule } from 'src/app/shared/controls/tables/table/table.module';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';
import { GlobalHeaderModule } from '../../global-header/global-header.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/app/store/reducers/counter.reducer';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    GlobalHeaderModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TranslateModule,
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
  ],
  providers: [BreadcrumbService],
  exports: [EmployeeComponent],
})
export class EmployeeModule { }
