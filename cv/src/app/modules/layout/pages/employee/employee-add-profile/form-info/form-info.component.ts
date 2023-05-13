import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  public validateForm!: UntypedFormGroup;
  public submitted = false;
  public employee: Employee;
  public isEditMode = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  public ngOnInit(): void {
    const options = history.state.options;
    this.employee = options && options.employee;

    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
    });
    if (this.employee) {
      this.validateForm.get('firstName')?.setValue(this.employee.firstName);
      this.validateForm.get('lastName')?.setValue(this.employee.lastName);
      this.validateForm.get('email')?.setValue(this.employee.email);
      this.validateForm
        .get('specialization')
        ?.setValue(this.employee.specialization);
      this.validateForm.get('department')?.setValue(this.employee.department);
      this.isEditMode = true;
    }
  }

  private updateEmployee(employee: Employee): void {
    employee.id = this.employee.id;
    this.employeeService.updateEmployee(employee).subscribe(
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
  }

  private addEmployee(employee: Employee): void {
    this.employeeService.addEmployee(employee).subscribe(
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
      this.updateEmployee(employee);
    } else {
      this.addEmployee(employee);
    }
  }
}
