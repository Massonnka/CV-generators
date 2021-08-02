import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './components/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    TranslateModule
  ],
  exports: [
    TextareaComponent
  ]
})
export class TextareaModule { }
