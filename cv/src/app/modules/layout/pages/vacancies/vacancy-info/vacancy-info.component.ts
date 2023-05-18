import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { VacanciesService } from 'src/app/core/services/vacancies.service.';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Vacancy } from 'src/app/shared/interfaces/vacancies.interface';

@Component({
  selector: 'app-vacancy-info',
  templateUrl: './vacancy-info.component.html',
  styleUrls: ['./vacancy-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacancyInfoComponent implements OnInit {
  public vacancy$: Observable<Vacancy>;
  public vacancyId: string;

  public params = {
    id: '',
  };

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  private breadcrumbHome: string;
  private breadcrumbVacancies: string;
  private currentVacancy: Vacancy;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private vacanciesService: VacanciesService,
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{
      breadcrumbs: Breadcrumb[];
    }>
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      (value) => {
        this.vacancyId = value.vacancy;
      }
    );

    this.params.id = this.vacancyId;
    this.vacancy$ = this.vacanciesService.getVacancyById(
      this.vacancyId,
      this.params
    );

    this.vacancy$.subscribe((value) => {
      this.currentVacancy = value;
      this.onBreadcrumbsChange();
    });

    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
  }

  public deleteItem(vacancy: Vacancy) {
    if (vacancy) {
      this.vacanciesService.deleteVacancy(vacancy.id).subscribe(() => {
        this.vacancy$ = this.vacanciesService.getVacancyById(
          this.vacancyId,
          this.params
        );
      });
    }
  }

  public editItem(vacancy: Vacancy) {
    this.router.navigate(['/layout/vacancies/addinfo'], {
      state: {
        options: {
          vacancy,
        },
      },
    });
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.vacancies'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbVacancies =
          this.translateService.instant('pages.vacancies');
        this.onBreadcrumbsChange();
      });
  }

  private onBreadcrumbsChange(): void {
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: this.breadcrumbHome,
            isDisabled: true,
          },
          {
            url: '/layout/vacancies',
            name: this.breadcrumbVacancies,
            isDisabled: false,
          },
          {
            url: '/layout/vacancy/id',
            name: this.currentVacancy?.name || '',
            isDisabled: true,
          },
        ],
      })
    );
  }
}
