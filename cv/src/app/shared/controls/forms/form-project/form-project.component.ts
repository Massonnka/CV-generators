import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      startdate: [null, [Validators.required]],
      enddate: [null, [Validators.required]],
      teamsize: [null, [Validators.required]],
      techstack: [null, [Validators.required]],
      roles: [null, [Validators.required]],
      respons: [null, [Validators.required]],
      descript: [null, [Validators.required]]
    });
  }

}
