import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './../auth/components/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'log-in',
        loadChildren: () =>
          import('./components/log-in/log-in.module').then(
            (m) => m.LogInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('./components/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }