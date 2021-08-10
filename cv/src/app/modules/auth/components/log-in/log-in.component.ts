import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginUser } from 'src/app/core/interfaces/login-user.interface';

import * as fromAuthActions from '../../store/auth.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent implements OnInit {
  public passwordVisible = false;
  public password?: string;

  public isPassCorrect = true;
  public submitted = false;
  public message: string;

  public validateForm!: FormGroup;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please, enter data';
      } else if (params.authFailed) {
        this.message = 'Session ended. Enter data again.';
      }
    });

    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      remember: [false],
    });
  }

  public loginUser(): void {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: LoginUser = {
      email: this.validateForm.value.email,
      password: this.validateForm.value.password,
    };

    this.authService.signIn(user).subscribe(
      () => {
        this.store.dispatch(fromAuthActions.loginSuccess({ user }));
        this.validateForm.reset();
        this.router.navigate(['layout/employee']);
      },
      () => {
        this.isPassCorrect = false;
        this.submitted = false;

        this.store.dispatch(
          fromAuthActions.loginFailure({ error: 'Fail to login' })
        );
      }
    );
    this.submitted = false;
  }
}
