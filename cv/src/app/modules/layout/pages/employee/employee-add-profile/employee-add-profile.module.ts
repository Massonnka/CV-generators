import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { FormInfoModule } from './form-info/form-info.module';
import { ListModule } from 'src/app/shared/controls/list/list.module';
import { EmployeeAddProfileRoutingModule } from './employee-add-profile-routing.module';
import { EmployeeAddProfileComponent } from './employee-add-profile.component';
import { FormCvModule } from './form-cv/form-cv.module';

@NgModule({
  declarations: [EmployeeAddProfileComponent],
  imports: [
    CommonModule,
    EmployeeAddProfileRoutingModule,
    TranslateModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    PrimaryButtonModule,
    DefaultButtonModule,
    NzTabsModule,
    FormInfoModule,
    ListModule,
    BreadcrumbModule,
    DefaultButtonModule,
    FormCvModule,
  ],
  exports: [EmployeeAddProfileComponent],
})
export class EmployeeAddProfileModule { }
