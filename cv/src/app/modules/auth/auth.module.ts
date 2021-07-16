import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BgModule } from 'src/app/shared/controls/bg/bg.module';
import { FrameLogoModule } from 'src/app/shared/controls/frame-logo/frame-logo.module';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { DropdownModule } from 'src/app/shared/controls/buttons/dropdown/dropdown.module';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginFormModule } from 'src/app/shared/controls/forms/login-form/login-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BgModule,
    FrameLogoModule,
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
  ],
  exports: [AuthComponent],
})
export class AuthModule { }
