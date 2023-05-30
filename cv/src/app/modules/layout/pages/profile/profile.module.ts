import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgxPaginationModule } from 'ngx-pagination';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { AutocompleteModule } from 'src/app/shared/controls/inputs/autocomplete/autocomplete.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SelectModule } from 'src/app/shared/controls/inputs/select/select.module';
import { DatePickerModule } from 'src/app/shared/controls/inputs/date-picker/date-picker.module';

@NgModule({
  declarations: [ProfileComponent, UserInfoComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    TranslateModule,
    PrimaryButtonModule,
    TableModule,
    NzTableModule,
    BreadcrumbModule,
    RouterModule,
    InputModule,
    SelectModule,
    DatePickerModule,
    NzIconModule,
    SpinnerModule,
    NgxPaginationModule,
    ProfileRoutingModule,
    NzStatisticModule,
    NzGridModule,
    NzAvatarModule,
    NzDividerModule,
    NzCollapseModule,
    AutocompleteModule,
    NzInputModule,
    NzButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProfileComponent],
})
export class ProfileModule {}
