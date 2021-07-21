import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  public validateForm!: FormGroup;
  public nameControl: FormControl;
  public startDateControl: FormControl;
  public endDateControl: FormControl;
  public teamSizeControl: FormControl;
  public techStackControl: FormControl;
  public rolesControl: FormControl;
  public descriptionControl: FormControl;
  public responsibilitiesControl: FormControl;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.startDateControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.endDateControl = new FormControl('', [
      Validators.required,
    ]);
    this.teamSizeControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.techStackControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.rolesControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.descriptionControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.responsibilitiesControl = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
    this.validateForm = new FormGroup({
      firstName: this.nameControl,
      startDate: this.startDateControl,
      endDate: this.endDateControl,
      teamSize: this.teamSizeControl,
      techStack: this.techStackControl,
      roles: this.rolesControl,
      description: this.descriptionControl,
      responsibilities: this.responsibilitiesControl
    });
  }

}
