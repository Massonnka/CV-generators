import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { LoginUser } from 'src/app/core/interfaces/interfaces';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  passwordVisible = false;
  password?: string;

  public isPassCorrect = true;
  submitted = false;
  message: string;

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.loginAgain) {
        this.message = 'Please, enter data';
      } else if (params.authFailed) {
        this.message = 'Session ended. Enter data again.';
      }
    });

    this.validateForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }

  loginUser() {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: LoginUser = {
      email: this.validateForm.value.email,
      password: this.validateForm.value.password
    };

    this.authService.signIn(user).subscribe(() => {
      this.validateForm.reset();
      this.router.navigate(['layout/employee']);
    }, () => {
      this.isPassCorrect = false;
      this.submitted = false;
    });
    this.submitted = false;
  }
}

