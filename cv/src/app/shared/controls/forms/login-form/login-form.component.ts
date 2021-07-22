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

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [true]
    });
  }
}
