import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PrimaryButtonModule } from 'src/app/shared/controls/buttons/primary-button/primary-button.module';
import { LoginFormComponent } from './login-form.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';

@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    TranslateModule,
    PrimaryButtonModule,
    NzCheckboxModule,
    InputModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }
