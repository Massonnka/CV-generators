import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { GENDERS } from 'src/app/shared/constants/genders.constants';
import { LANGUAGE_LEVELS } from 'src/app/shared/constants/language-levels.constants';
import { PROFESSIONAL_LEVELS } from 'src/app/shared/constants/professional-levels.constants';
import { SPECIALIZATIONS } from 'src/app/shared/constants/specializations.constants';
import { Gender } from 'src/app/shared/enums/gender.enums';
import { LanguageLevel } from 'src/app/shared/enums/language-levels.enums';
import { ProfessionalLevel } from 'src/app/shared/enums/professional-levels.enums';
import { Specializations } from 'src/app/shared/enums/specializations.enums';
import { Employee } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit {
  public Specializations = Specializations;
  public ProfessionalLevel = ProfessionalLevel;
  public LanguageLevel = LanguageLevel;

  public genders = GENDERS;
  public specializations = SPECIALIZATIONS;
  public languageLevel = LANGUAGE_LEVELS;
  public professionalLevels = PROFESSIONAL_LEVELS;

  public editForm: FormGroup;

  public userInfo: Employee;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    const userId = localStorage.getItem('user-id');
    this.employeeService
      .getEmployeeById(userId)
      .pipe(filter((user) => Boolean(user)))
      .subscribe((user) => {
        this.userInfo = user;
        this.cdr.markForCheck();

        this.initEditForm();
      });
  }

  public onBack() {
    this.router.navigate(['/layout/profile']);
  }

  public onSubmit(): void {
    if (this.editForm.invalid) {
      return;
    }

    const formData = this.editForm.getRawValue();
    const updatedEmployee: Employee = {
      ...this.userInfo,
      id: this.userInfo.id,
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      email: formData.email,
      birthDate: formData.birthDate,
      gender: formData.gender,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
      professionalLevel: formData.professionalLevel,
      englishLevel: formData.englishLevel,
      emergencyPhone: formData.emergencyPhone,
      hiringDate: formData.hiringDate,
      rate: formData.rate,
      //managerId: formData.manager,
      //officeManagerId: formData.officeManager,
      //resourceManagerId: formData.resourceManager,
      specialization: formData.specialization,
    };

    this.employeeService.updateEmployee(updatedEmployee);

    this.router.navigate(['/layout/profile']);
  }

  private initEditForm(): void {
    this.editForm = this.fb.group({
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
      //manager: [null],
      //officeManager: [null],
      //resourceManager: [null],
    });

    if (this.userInfo) {
      this.editForm.patchValue(this.userInfo);
    }
  }
}
