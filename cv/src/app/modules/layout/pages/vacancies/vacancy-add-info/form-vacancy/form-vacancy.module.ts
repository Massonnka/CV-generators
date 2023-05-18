import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AutocompleteModule } from 'src/app/shared/controls/inputs/autocomplete/autocomplete.module';
import { DatePickerModule } from 'src/app/shared/controls/inputs/date-picker/date-picker.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { TextareaModule } from 'src/app/shared/controls/inputs/textarea/textarea.module';
import { FormVacancyComponent } from './form-vacancy.component';

@NgModule({
  declarations: [FormVacancyComponent],
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
    TextareaModule,
    AutocompleteModule,
    HttpClientModule,
  ],
  exports: [FormVacancyComponent],
})
export class FormVacancyModule {}
