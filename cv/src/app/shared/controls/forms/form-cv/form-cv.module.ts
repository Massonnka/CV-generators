import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCvComponent } from './form-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
=======
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { InputModule } from '../../inputs/input/input.module';


>>>>>>> 940e9c22fe124226f21d9026b92becec71d3a6b5

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
<<<<<<< HEAD
  ],
=======
    InputModule
  ],
  exports: [
    FormCvComponent
  ]
>>>>>>> 940e9c22fe124226f21d9026b92becec71d3a6b5
})
export class FormCvModule {}
