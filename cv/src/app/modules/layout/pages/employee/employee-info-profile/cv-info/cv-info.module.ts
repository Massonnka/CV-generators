import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvInfoComponent } from './cv-info.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { FormCvModule } from '../../employee-add-profile/form-cv/form-cv.module';
import { SpinnerModule } from 'src/app/shared/controls/spinner/spinner.module';

@NgModule({
  declarations: [CvInfoComponent],
  imports: [CommonModule, NzCollapseModule, FormCvModule, SpinnerModule],
  exports: [CvInfoComponent],
})
export class CvInfoModule {}
