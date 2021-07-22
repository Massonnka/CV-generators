import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.scss']
})
export class FormProjectComponent implements OnInit {

  public validateForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      teamSize: ['', Validators.required],
      techStack: ['', [Validators.required, Validators.minLength(4)]],
      roles: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(4)]],
      responsibilities: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

}
