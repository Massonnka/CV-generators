import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
})
export class FormInfoComponent implements OnInit {

  public validateForm!: FormGroup;
  public firstNameControl: FormControl;
  public lastNameControl: FormControl;
  public emailControl: FormControl;
  public specializationControl: FormControl;
  public departmentControl: FormControl;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.firstNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.lastNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.emailControl = new FormControl('', [
      Validators.required,
    ]);
    this.specializationControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.departmentControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.validateForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      specialization: this.specializationControl,
      department: this.departmentControl
    });
  }

}
