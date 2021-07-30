import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { DropdownModule } from 'src/app/shared/controls/buttons/dropdown/dropdown.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth.component';
import { LogInModule } from './components/log-in/log-in.module';
import { LoginFormModule } from './components/log-in/login-form/login-form.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpModule } from './components/sign-up/sign-up.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    DropdownModule,
    NzIconModule,
    CircleButtonModule,
    PrimaryButtonModule,
    LoginFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    LogInModule,
    SignUpModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule { }
