import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';

@Component({
  selector: 'app-add-vacancy-info',
  templateUrl: './vacancy-add-info.component.html',
  styleUrls: ['./vacancy-add-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacancyAddInfoComponent implements OnInit {
  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  constructor(
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  private breadcrumbHome: string;
  private breadcrumbVacancy: string;
  private breadcrumbAddInfo: string;

  public ngOnInit(): void {
    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.onBreadcrumbsChange();
  }

  public onBack(): void {
    this.location.back();
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.vacancies', 'pages.info'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbVacancy = this.translateService.instant('pages.vacancies');
        this.breadcrumbAddInfo = this.translateService.instant('pages.info');
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
            name: this.breadcrumbVacancy,
            isDisabled: false,
          },
          {
            url: '/layout/vacancies/addinfo',
            name: this.breadcrumbAddInfo,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
