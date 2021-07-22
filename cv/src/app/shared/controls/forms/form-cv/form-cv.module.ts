import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCvComponent } from './form-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputModule } from '../../inputs/input/input.module';
import { AutocompleteModule } from '../../inputs/autocomplete/autocomplete.module';



@NgModule({
  declarations: [
    FormCvComponent
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
    AutocompleteModule
  ],
  exports: [
    FormCvComponent
  ]
})
export class FormCvModule { }
