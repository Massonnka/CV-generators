import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectProfileComponent } from './project-profile.component';
import { ProjectProfileRoutingModule } from './project-profile-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';



@NgModule({
  declarations: [
    ProjectProfileComponent
  ],
  imports: [
    CommonModule,
    ProjectProfileRoutingModule,
    TranslateModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    PrimaryButtonModule,
  ],
  exports: [
    ProjectProfileComponent
  ]
})
export class ProjectProfileModule { }
