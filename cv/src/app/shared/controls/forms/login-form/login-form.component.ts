import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  passwordVisible = false;
  password?: string;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  public userNameControl: FormControl;
  public passwordControl: FormControl;


  public ngOnInit(): void {
    this.userNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.passwordControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.validateForm = new FormGroup({
      firstName: this.userNameControl,
      lastName: this.passwordControl
    });
  }
}
