import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonQuestionComponent } from './button-question.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    ButtonQuestionComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [
    ButtonQuestionComponent
  ]
})
export class ButtonQuestionModule { }
