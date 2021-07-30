import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { TranslateModule } from '@ngx-translate/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginFormModule } from './login-form/login-form.module';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    LoginFormModule,
    PrimaryButtonModule,
    TranslateModule,
    NzFormModule
  ],
  exports: [
    LogInComponent
  ]
})
export class LogInModule { }
