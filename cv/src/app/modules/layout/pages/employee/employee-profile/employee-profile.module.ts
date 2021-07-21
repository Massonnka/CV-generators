import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { FormInfoModule } from 'src/app/shared/controls/forms/form-info/form-info.module';
import { ListModule } from 'src/app/shared/controls/list/list.module';
import { EmployeeProfileRoutingModule } from './employee-profile-routing.module';
import { EmployeeProfileComponent } from './employee-profile.component';

@NgModule({
  declarations: [EmployeeProfileComponent],
  imports: [
    CommonModule,
    EmployeeProfileRoutingModule,
    TranslateModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    PrimaryButtonModule,
    NzTabsModule,
    FormInfoModule,
    ListModule,
    DefaultButtonModule
  ],
  exports: [EmployeeProfileComponent],
})
export class EmployeeProfileModule { }
