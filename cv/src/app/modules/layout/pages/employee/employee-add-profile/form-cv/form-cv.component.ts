import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCvComponent implements OnInit {
  public validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      skills: ['', [Validators.required, Validators.minLength(4)]],
      specialization: ['', [Validators.required, Validators.minLength(4)]],
      department: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
}
