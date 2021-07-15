import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BgModule } from 'src/app/shared/controls/auth/bg/bg.module';
import { ButtonGlobalModule } from 'src/app/shared/controls/auth/button-global/button-global.module';
import { ButtonQuestionModule } from 'src/app/shared/controls/auth/button-question/button-question.module';
import { FrameLogoModule } from 'src/app/shared/controls/auth/frame-logo/frame-logo.module';
import { FormAuthModule } from 'src/app/shared/controls/auth/form-auth/form-auth.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BgModule,
    ButtonGlobalModule,
    ButtonQuestionModule,
    FrameLogoModule,
    FormAuthModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
