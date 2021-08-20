import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import {
  breadcrumbReducer,
  breadcrumbsFeatureKey,
} from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { SearchEmployeePipe } from 'src/app/shared/pipes/searchEmployee.pipe';
import {
  employeeFeatureKey,
  employeeReducer,
} from 'src/app/store/employee/employee.reducers';
import { GlobalHeaderModule } from '../../global-header/global-header.module';
import { EmployeeAddProfileModule } from './employee-add-profile/employee-add-profile.module';
import { EmployeeInfoProfileModule } from './employee-info-profile/employee-info-profile.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';

@NgModule({
  declarations: [EmployeeComponent, SearchEmployeePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EmployeeRoutingModule,
    GlobalHeaderModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TranslateModule,
    PrimaryButtonModule,
    TableModule,
    NzTableModule,
    BreadcrumbModule,
    EmployeeAddProfileModule,
    EmployeeInfoProfileModule,
    RouterModule,
    InputModule,
    NzIconModule,
    SpinnerModule,
    NgxPaginationModule,
    PaginatePipe,
    StoreModule.forFeature(
      breadcrumbsFeatureKey || employeeFeatureKey,
      breadcrumbReducer || employeeReducer
    ),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
