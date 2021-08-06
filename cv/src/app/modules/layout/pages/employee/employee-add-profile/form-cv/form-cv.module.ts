import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AutocompleteModule } from 'src/app/shared/controls/inputs/autocomplete/autocomplete.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { FormCvComponent } from './form-cv.component';

@NgModule({
  declarations: [FormCvComponent],
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
    AutocompleteModule,
    NzCollapseModule,
  ],
  exports: [FormCvComponent],
})
export class FormCvModule {}
