import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectComponent } from './components/select.component';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    TranslateModule,
  ],
  exports: [SelectComponent],
})
export class SelectModule {}
