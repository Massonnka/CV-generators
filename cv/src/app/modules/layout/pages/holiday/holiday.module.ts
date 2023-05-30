import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import {
  breadcrumbReducer,
  breadcrumbsFeatureKey,
} from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.reducer';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TableModule } from 'src/app/shared/controls/table/table.module';
import { HolidayComponent } from './holiday.component';
import { HolidayRoutingModule } from './holiday-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { SelectModule } from 'src/app/shared/controls/inputs/select/select.module';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [HolidayComponent],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HolidayRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NgxPaginationModule,
    InputModule,
    SelectModule,
    NzSelectModule,
    NzTabsModule,
    NzIconModule,
    StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer),
    SpinnerModule,
  ],
  exports: [HolidayComponent],
})
export class HolidayModule {}
