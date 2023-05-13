import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  FormControl,
  UntypedFormGroup,
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
  public validateForm!: UntypedFormGroup;
  public captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  public userTypes: string[];
  public selectedValue = 'Angular';
  public submitted = false;
  public message: string;

  public updateConfirmValidator(): void {
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  public checkIfMatchingPasswords(
    passwordKey: string,
    passwordConfirmationKey: string
  ) {
    return (group: UntypedFormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true });
      } else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.userTypes = ['Angular', 'React', 'Node JS'];

    this.validateForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        password: [null, [Validators.required, Validators.minLength(6)]],
        confirmPass: [null, Validators.required],
        email: [null, [Validators.email, Validators.required]],
        specialization: ['', Validators.required],
        agree: [false],
      },
      { validator: this.checkIfMatchingPasswords('password', 'confirmPass') }
    );
  }

  private userCheck(user: RegisterUser) {
    this.authService.signUp(user).subscribe(
      () => {
        console.log(1);

        this.validateForm.reset();
        this.router.navigate(['auth/log-in']);
        this.submitted = false;
      },
      (error) => {
        console.log(error);
        this.submitted = false;
      }
    );
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

    this.userCheck(user);
  }
}
