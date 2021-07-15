import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormAuthInputComponent } from './form-auth-input.component';

@NgModule({
  declarations: [
    FormAuthInputComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzIconModule,
    TranslateModule,
  ],
  exports: [
    FormAuthInputComponent
  ]
})
export class FormAuthInputModule { }
