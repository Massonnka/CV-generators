import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import {
  breadcrumbReducer,
  breadcrumbsFeatureKey,
} from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { GlobalHeaderModule } from '../../global-header/global-header.module';
import { EmployeeAddProfileModule } from './employee-add-profile/employee-add-profile.module';
import { EmployeeInfoProfileModule } from './employee-info-profile/employee-info-profile.module';
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
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
    EmployeeAddProfileModule,
    EmployeeInfoProfileModule,
    StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer),
    SpinnerModule,
  ],
  exports: [EmployeeComponent],
})
export class EmployeeModule {}
