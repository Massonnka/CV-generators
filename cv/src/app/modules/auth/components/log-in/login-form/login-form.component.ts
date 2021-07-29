import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  passwordVisible = false;
  password?: string;

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }

  loginUser() {
    this.authService.signIn(this.validateForm.value)
  }
}
