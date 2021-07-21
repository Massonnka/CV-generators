import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.scss'],
})
export class FormCvComponent implements OnInit {

  public validateForm!: FormGroup;
  public emailControl: FormControl;
  public lastNameControl: FormControl;
  public skillsControl: FormControl;
  public specializationControl: FormControl;
  public departmentControl: FormControl;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.lastNameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.skillsControl = new FormControl('', [
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
      firstName: this.emailControl,
      lastName: this.lastNameControl,
      skills: this.skillsControl,
      specialization: this.specializationControl,
      department: this.departmentControl
    });
  }

}
