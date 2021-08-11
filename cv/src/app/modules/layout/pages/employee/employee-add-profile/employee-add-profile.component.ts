import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';

@Component({
  selector: 'app-employee-add-profile',
  templateUrl: './employee-add-profile.component.html',
  styleUrls: ['./employee-add-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAddProfileComponent implements OnInit {
  public cvInfoHide = true;
  public isLoading = false;

  public cves: any = [
    {
      name: 'cv',
      index: 1,
      employee: {
        email: '',
        lastname: '',
        skills: '',
        specialization: '',
        department: '',
      },
      projects: [],
    },
  ];

  public currentUserId: number;
  public currentCvId: number = 1;

  private breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  constructor(
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) {}

  private breadcrumbHome: string;
  private breadcrumbEmployee: string;
  private breadcrumbInfo: string;

  public ngOnInit(): void {
    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.onBreadcrumbsChange();
  }

  public onBack() {
    this.location.back();
  }

  public toggleCvInfo(index: number): void {
    if (this.currentCvId === index - 1) {
      this.cvInfoHide = !this.cvInfoHide;
    } else {
      if (this.cvInfoHide) {
        this.cvInfoHide = !this.cvInfoHide;
      }
    }
    this.currentCvId = index - 1;
  }

  public addCv(): void {
    this.cves = [
      ...this.cves,
      {
        name: 'cv',
        index: this.cves.length + 1,
        employee: {
          email: '',
          lastname: '',
          skills: '',
          specialization: '',
          department: '',
        },
        projects: [],
      },
    ];
  }

  public addProject(): void {
    this.cves[this.currentCvId].projects.push({});
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.employee', 'pages.info'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbEmployee =
          this.translateService.instant('pages.employee');
        this.breadcrumbInfo = this.translateService.instant('pages.info');
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
            url: '/layout/employee',
            name: this.breadcrumbEmployee,
            isDisabled: false,
          },
          {
            url: '/layout/employee/info',
            name: this.breadcrumbInfo,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
