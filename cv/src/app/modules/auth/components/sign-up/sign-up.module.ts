import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { RegistrFormModule } from './registr-form/registr-form.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    PrimaryButtonModule,
    RegistrFormModule,
    SignUpRoutingModule,
    TranslateModule,
    NzFormModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule { }
