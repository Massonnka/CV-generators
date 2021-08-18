import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCvComponent } from './profile-cv.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [
    ProfileCvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzRateModule,
    NzIconModule,
    NzProgressModule
  ],
  exports: [
    ProfileCvComponent
  ]
})
export class ProfileCvModule { }
