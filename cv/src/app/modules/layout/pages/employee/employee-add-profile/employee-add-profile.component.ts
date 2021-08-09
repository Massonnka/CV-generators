import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-add-profile',
  templateUrl: './employee-add-profile.component.html',
  styleUrls: ['./employee-add-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAddProfileComponent implements OnInit {
  public isCvInfoHide = true;
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

  constructor(
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) {}

  private breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public onBack() {
    this.location.back();
  }

  public toggleCvInfo(index: number): void {
    this.isCvInfoHide = !this.isCvInfoHide;
    this.currentCvId = index - 1;
  }

  private breadcrumbHome: string;
  private breadcrumbEmployee: string;
  private breadcrumbInfo: string;

  public ngOnInit(): void {
    this.translateService
      .get(['pages.home', 'pages.project', 'pages.info'])
      .subscribe((translations) => {
        this.breadcrumbHome = this.translateService.instant(
          translations['pages.home']
        );
        this.breadcrumbEmployee = this.translateService.instant(
          translations['pages.project']
        );
        this.breadcrumbInfo = this.translateService.instant(
          translations['pages.info']
        );
      });

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
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
            url: '/layout/employee/addInfo',
            name: this.breadcrumbInfo,
            isDisabled: true,
          },
        ],
      })
    );
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
}
