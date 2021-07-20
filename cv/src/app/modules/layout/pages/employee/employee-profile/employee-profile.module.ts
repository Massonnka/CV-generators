import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TabsModule } from 'src/app/shared/controls/tabs/tabs.module';
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
    TabsModule,
  ],
  exports: [EmployeeProfileComponent],
})
export class EmployeeProfileModule {}
