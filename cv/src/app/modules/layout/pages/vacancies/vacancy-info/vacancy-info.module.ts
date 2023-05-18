import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { PrimaryButtonModule } from '../../../../../shared/controls/buttons/primary-button/primary-button.module';
import { VacancyInfoComponent } from './vacancy-info.component';

@NgModule({
  declarations: [VacancyInfoComponent],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    NzButtonModule,
    NzLayoutModule,
    NzDescriptionsModule,
    TranslateModule,
    BreadcrumbModule,
    DefaultButtonModule,
    SpinnerModule,
  ],
  exports: [VacancyInfoComponent],
})
export class VacancyInfoModule {}
