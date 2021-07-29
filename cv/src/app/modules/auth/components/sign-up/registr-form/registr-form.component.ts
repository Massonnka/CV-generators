import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Specializations } from 'src/app/shared/constants/specializations.constants';


@Component({
  selector: 'app-registr-form',
  templateUrl: './registr-form.component.html',
  styleUrls: ['./registr-form.component.scss'],
})
export class RegistrFormComponent implements OnInit {
  public specializations = Specializations;

  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
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

  registerUser() {
    this.authService.signUp(this.validateForm.value).subscribe((res) => {
      if (res.result) {        
        this.validateForm.reset();
        this.router.navigate(['auth/log-in']);
      }
    });
  }
}
