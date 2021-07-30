import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInfoComponent } from './project-info.component';
import { PrimaryButtonModule } from '../../../../../shared/controls/buttons/primary-button/primary-button.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BreadcrumbModule } from 'src/app/shared/controls/breadcrumb/breadcrumb.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';

@NgModule({
  declarations: [
    ProjectInfoComponent
  ],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    NzButtonModule,
    NzLayoutModule,
    NzDescriptionsModule,
    TranslateModule,
    ProjectInfoRoutingModule,
    BreadcrumbModule,
    DefaultButtonModule
  ],
  exports: [ProjectInfoComponent],
})
export class ProjectInfoModule { }
