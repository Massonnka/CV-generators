import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BgModule } from 'src/app/shared/controls/auth/bg/bg.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BgModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
