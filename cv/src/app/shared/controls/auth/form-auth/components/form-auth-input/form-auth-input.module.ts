import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthInputComponent } from './form-auth-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    FormAuthInputComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule
  ],
  exports: [
    FormAuthInputComponent
  ]
})
export class FormAuthInputModule { }
