import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProjectComponent } from './form-project.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputModule } from '../../inputs/input/input.module';
import { DatePickerModule } from '../../inputs/date-picker/date-picker.module';
import { TextareaModule } from '../../inputs/textarea/textarea.module';

@NgModule({
  declarations: [
    FormProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    TranslateModule,
    NzInputModule,
    NzDatePickerModule,
    InputModule,
    DatePickerModule,
    TextareaModule
  ],
  exports: [
    FormProjectComponent
  ]
})
export class FormProjectModule { }
