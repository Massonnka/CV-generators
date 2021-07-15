import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-auth-input',
  templateUrl: './form-auth-input.component.html',
  styleUrls: ['./form-auth-input.component.css']
})
export class FormAuthInputComponent implements OnInit {

  passwordVisible = false;
  password?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
