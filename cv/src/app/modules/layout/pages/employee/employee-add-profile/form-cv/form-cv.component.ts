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
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCvComponent implements OnInit {
  public validateForm!: FormGroup;
  public submitted = false;
  public employee: Employee;
  public isEditMode = false;
  public employeesId = Number(localStorage.getItem('employee-id'));

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService) { }

  public ngOnInit(): void {
    const options = history.state.options;
    this.employee = options && options.employee;

    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      skills: ['', [Validators.required, Validators.minLength(6)]],
      specialization: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
    });
    if (this.employee) {
      this.validateForm.get("email")?.setValue(this.employee.cv?.email);
      this.validateForm.get("lastName")?.setValue(this.employee.cv?.lastName);
      this.validateForm.get("skills")?.setValue(this.employee.cv?.skills);
      this.validateForm.get("specialization")?.setValue(this.employee.cv?.specialization);
      this.validateForm.get("department")?.setValue(this.employee.cv?.department);
      this.isEditMode = true;
    }
  }

  public submit() {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const employee: Employee = {
      cv: {
        email: this.validateForm.value.email,
        lastName: this.validateForm.value.lastName,
        skills: this.validateForm.value.skills,
        specialization: this.validateForm.value.specialization,
        department: this.validateForm.value.department,
      }
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
