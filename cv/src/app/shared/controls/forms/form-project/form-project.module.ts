import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProjectComponent } from './form-project.component';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    FormProjectComponent
  ],
  imports: [
    CommonModule,
    NzFormModule
  ],
  exports: [
    FormProjectComponent
  ]
})
export class FormProjectModule { }
