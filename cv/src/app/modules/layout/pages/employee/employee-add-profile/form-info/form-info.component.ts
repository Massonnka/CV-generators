import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueId } from 'lodash-es';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Gender } from 'src/app/shared/enums/gender.enums';
import { Employee } from 'src/app/shared/interfaces/employees.interface';

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
      middleName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', [Validators.required]],
      gender: [Gender.Male, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      specialization: [null, [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', [Validators.required, Validators.minLength(3)]],
      professionalLevel: [null, [Validators.required]],
      englishLevel: [null],
      emergencyPhone: [null],
      hiringDate: [null],
      rate: [null],
      manager: [null],
      officeManager: [null],
      resourceManager: [null],
    });

    if (this.employee) {
      this.validateForm.get('firstName')?.setValue(this.employee.firstName);
      this.validateForm.get('middleName')?.setValue(this.employee.middleName);
      this.validateForm.get('lastName')?.setValue(this.employee.lastName);
      this.validateForm.get('email')?.setValue(this.employee.email);
      this.validateForm
        .get('specialization')
        ?.setValue(this.employee.specialization);

      this.validateForm.patchValue(this.employee);

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
      id: uniqueId(),
      firstName: this.validateForm.value.firstName,
      middleName: this.validateForm.value.middleName,
      lastName: this.validateForm.value.lastName,
      email: this.validateForm.value.email,
      specialization: this.validateForm.value.specialization,
      birthDate: this.validateForm.value.birthDate,
      gender: this.validateForm.value.gender,
      phoneNumber: this.validateForm.value.phoneNumber,
      location: this.validateForm.value.location,
      professionalLevel: this.validateForm.value.professionalLevel,
      englishLevel: this.validateForm.value.englishLevel,
      emergencyPhone: this.validateForm.value.emergencyPhone,
      hiringDate: new Date(this.validateForm.value.hiringDate).toISOString(),
      rate: this.validateForm.value.rate,
      managerId: this.validateForm.value.manager,
      officeManagerId: this.validateForm.value.officeManager,
      resourceManagerId: this.validateForm.value.resourceManager,
      createdAt: new Date().toISOString(),
    };

    if (this.isEditMode) {
      this.updateEmployee(employee);
    } else {
      this.addEmployee(employee);
    }
  }
}
