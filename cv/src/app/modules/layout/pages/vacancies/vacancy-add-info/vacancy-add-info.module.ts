import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { VacancyInfoModule } from '../vacancy-info/vacancy-info.module';
import { FormVacancyModule } from './form-vacancy/form-vacancy.module';
import { VacancyAddInfoComponent } from './vacancy-add-info.component';

@NgModule({
  declarations: [VacancyAddInfoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    DefaultButtonModule,
    BreadcrumbModule,
    VacancyInfoModule,
    FormVacancyModule,
  ],
  exports: [VacancyAddInfoComponent],
})
export class VacancyAddInfoModule {}
