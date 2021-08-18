import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvInfoComponent } from './cv-info.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FormCvModule } from '../../employee-add-profile/form-cv/form-cv.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { RouterModule } from '@angular/router';
import { ProfileCvModule } from '../profile-cv/profile-cv.module';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [CvInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzCollapseModule,
    FormCvModule,
    SpinnerModule,
    TranslateModule,
    NzDescriptionsModule,
    PrimaryButtonModule,
    DefaultButtonModule,
    ProfileCvModule,
    NzModalModule
  ],
  exports: [CvInfoComponent],
})
export class CvInfoModule { }
