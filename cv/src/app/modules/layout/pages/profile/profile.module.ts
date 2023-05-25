import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [ProfileComponent, UserInfoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TranslateModule,
    PrimaryButtonModule,
    TableModule,
    NzTableModule,
    BreadcrumbModule,
    RouterModule,
    InputModule,
    NzIconModule,
    SpinnerModule,
    NgxPaginationModule,
    ProfileRoutingModule,
    NzStatisticModule,
    NzGridModule,
    NzAvatarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileComponent],
})
export class ProfileModule {}
