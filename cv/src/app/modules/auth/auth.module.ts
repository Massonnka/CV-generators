import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BgModule } from 'src/app/shared/controls/auth/bg/bg.module';
import { ButtonGlobalModule } from 'src/app/shared/controls/auth/button-global/button-global.module';
import { ButtonQuestionModule } from 'src/app/shared/controls/auth/button-question/button-question.module';
import { FrameLogoModule } from 'src/app/shared/controls/auth/frame-logo/frame-logo.module';

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
    FrameLogoModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
