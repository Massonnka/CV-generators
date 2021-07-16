import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BgModule } from 'src/app/shared/controls/auth/bg/bg.module';
import { ButtonGlobalModule } from 'src/app/shared/controls/auth/button-global/button-global.module';
import { ButtonQuestionModule } from 'src/app/shared/controls/auth/button-question/button-question.module';
import { FormAuthModule } from 'src/app/shared/controls/auth/form-auth/form-auth.module';
import { FrameLogoModule } from 'src/app/shared/controls/auth/frame-logo/frame-logo.module';
import { CircleButtonModule } from 'src/app/shared/controls/buttons/circle-button/circle-button.module';
import { DropdownModule } from 'src/app/shared/controls/buttons/dropdown/dropdown.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BgModule,
    ButtonGlobalModule,
    ButtonQuestionModule,
    FrameLogoModule,
    FormAuthModule,
    TranslateModule,
    DropdownModule,
    NzIconModule,
    CircleButtonModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
