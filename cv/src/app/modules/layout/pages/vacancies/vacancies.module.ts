import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { VacanciesRoutingModule } from './vacancies-routing.module';
import { VacanciesComponent } from './vacancies.component';
import { VacancyAddInfoModule } from './vacancy-add-info/vacancy-add-info.module';
import { VacancyInfoModule } from './vacancy-info/vacancy-info.module';

@NgModule({
  declarations: [VacanciesComponent],
  imports: [
    CommonModule,
    FormsModule,
    VacanciesRoutingModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    PrimaryButtonModule,
    TableModule,
    BreadcrumbModule,
    VacancyInfoModule,
    VacancyAddInfoModule,
    HttpClientModule,
    NgxPaginationModule,
    InputModule,
    NzIconModule,
    StoreModule.forFeature(breadcrumbsFeatureKey, breadcrumbReducer),
    SpinnerModule,
  ],
  exports: [VacanciesComponent],
})
export class VacanciesModule {}
