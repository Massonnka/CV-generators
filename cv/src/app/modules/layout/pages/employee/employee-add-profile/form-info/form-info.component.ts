import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInfoComponent implements OnInit {
  public validateForm!: FormGroup;
  public submitted = false;
  public employee: Employee;
  public isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  public ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      specialization: ['', [Validators.required, Validators.minLength(4)]],
      department: ['', [Validators.required, Validators.minLength(4)]],
    });
    if (this.employee) {
      this.validateForm.get("firstName")?.setValue(this.employee.firstName);
      this.validateForm.get("lastName")?.setValue(this.employee.lastName);
      this.validateForm.get("email")?.setValue(this.employee.email);
      this.validateForm.get("specialization")?.setValue(this.employee.specialization);
      this.validateForm.get("departmen")?.setValue(this.employee.department);
      this.isEditMode = true;
    }
  }

  public submit() {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const employee: Employee = {
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,
      email: this.validateForm.value.email,
      specialization: this.validateForm.value.specialization,
      department: this.validateForm.value.department,
    };

    if (this.isEditMode) {
      employee.id = this.employee.id;
      this.employeeService.UpdateEmployee(employee).subscribe(
        () => {
          this.validateForm.reset();
          this.router.navigate(['/layout/employee']);
          this.submitted = false;
        },
        () => {
          this.submitted = false;
          this.isEditMode = false;
        }
      );
    } else {
      this.employeeService.AddEmployee(employee).subscribe(
        () => {
          this.validateForm.reset();
          this.router.navigate(['/layout/employee']);
          this.submitted = false;
        },
        () => {
          this.submitted = false;
        }
      );
    }
  }
}
