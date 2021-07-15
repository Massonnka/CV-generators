import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthComponent } from './form-auth.component';
import { FormAuthInputModule } from './components/form-auth-input/form-auth-input.module';



@NgModule({
  declarations: [
    FormAuthComponent
  ],
  imports: [
    CommonModule,
    FormAuthInputModule
  ],
  exports: [
    FormAuthComponent
  ]
})
export class FormAuthModule { }
