import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RegisterUser } from 'src/app/core/interfaces/register-user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public validateForm!: FormGroup;
  public captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  public selectedValue = 'Angular';
  public submitted = false;
  public message: string;

  public updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  public confirmationValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      email: [null, [Validators.email, Validators.required]],
      specialization: ['', [Validators.required, Validators.minLength(4)]],
      agree: [false],
    });
  }

  public registerUser() {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: RegisterUser = {
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,
      password: this.validateForm.value.password,
      email: this.validateForm.value.email,
      specialization: this.validateForm.value.specialization,
    };

    this.authService.signUp(user).subscribe(
      () => {
        this.validateForm.reset();
        this.router.navigate(['auth/log-in']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
