import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { VacanciesService } from 'src/app/core/services/vacancies.service.';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Vacancy } from 'src/app/shared/interfaces/vacancies.interface';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacanciesComponent implements OnInit {
  @Input() public currentVacancy: Vacancy;

  public vacancies$: Observable<Vacancy[]>;
  public vacancies: Vacancy[] = [];
  public isLoading = false;
  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[] = [];

  private breadcrumbHome: string;
  private breadcrumbVacancies: string;
  public query: string = '';
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 8;

  constructor(
    private router: Router,
    private vacanciesService: VacanciesService,
    private cdRef: ChangeDetectorRef,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.fetchPosts();

    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.onBreadcrumbsChange();
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
            isDisabled: true,
          },
        ],
      })
    );
  }

  public fetchPosts(): void {
    this.vacanciesService.foundAllVacancies().subscribe((value: Vacancy[]) => {
      // TODO set vacancies
      this.vacancies = value;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }

  public addItem(): void {
    this.router.navigate(['/layout/vacancies/addinfo']);
  }

  public onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  public deleteItem(vacancy: Vacancy) {
    this.vacanciesService.deleteVacancy(vacancy.id).subscribe(() => {
      this.vacancies$ = this.vacanciesService.foundAllVacancies();
    });
  }
}
