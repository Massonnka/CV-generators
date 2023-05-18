import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { uniqueId } from 'lodash-es';
import { VacanciesService } from 'src/app/core/services/vacancies.service.';
import { Vacancy } from 'src/app/shared/interfaces/vacancies.interface';

@Component({
  selector: 'app-form-vacancy',
  templateUrl: './form-vacancy.component.html',
  styleUrls: ['./form-vacancy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormVacancyComponent implements OnInit {
  public validateForm!: UntypedFormGroup;
  public submitted = false;
  public vacancy: Vacancy;
  public isEditMode = false;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private vacanciesService: VacanciesService
  ) {}

  public ngOnInit(): void {
    const options = history.state.options;
    this.vacancy = options && options.project;

    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      requirements: ['', Validators.required],
      description: ['', Validators.required],
      salary: ['', [Validators.required]],
      endDate: ['', Validators.required],
      phone: ['', Validators.required],
    });

    if (this.vacancy) {
      this.validateForm.get('name')?.setValue(this.vacancy.name);
      this.validateForm
        .get('requirements')
        ?.setValue(this.vacancy.requirements);
      this.validateForm.get('description')?.setValue(this.vacancy.description);
      this.validateForm.get('salary')?.setValue(this.vacancy.salary);
      this.validateForm.get('endDate')?.setValue(this.vacancy.endDate);
      this.validateForm.get('phone')?.setValue(this.vacancy.phone);
      this.isEditMode = true;
    }
  }

  private updateVacancy(vacancy: Vacancy): void {
    vacancy.id = this.vacancy.id;
    this.vacanciesService.updateVacancy(vacancy).subscribe(
      () => {
        this.validateForm.reset();
        this.router.navigate(['/layout/vacancies']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
        this.isEditMode = false;
      }
    );
  }

  private addVacancy(vacancy: Vacancy): void {
    this.vacanciesService.addVacancy(vacancy).subscribe(
      () => {
        this.validateForm.reset();
        this.router.navigate(['/layout/vacancies']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }

  public submit(): void {
    if (this.validateForm.invalid) {
      return;
    }

    this.submitted = true;

    const vacancy: Vacancy = {
      id: this.vacancy?.id ? this.vacancy.id : uniqueId(),
      name: this.validateForm.value.name,
      requirements: this.validateForm.value.requirements,
      description: this.validateForm.value.description,
      salary: this.validateForm.value.salary,
      endDate: this.validateForm.value.endDate,
      phone: this.validateForm.value.phone,
    };
    if (this.isEditMode) {
      this.updateVacancy(vacancy);
    } else {
      this.addVacancy(vacancy);
    }
  }
}
