import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';

@Component({
  selector: 'app-employee-info-profile',
  templateUrl: './employee-info-profile.component.html',
  styleUrls: ['./employee-info-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeInfoProfileComponent implements OnInit {
  public isCvInfoHide = true;
  public isLoading = false;

  public cves: any = [{ name: 'cv 1' }];

  public currentUserId: number;

  public employee$: Observable<Employee>;
  public employeeId: string;

  private currentEmployee: Employee = null;

  constructor(
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) {
    this.activatedRouter.params.subscribe(
      (value) => (this.currentUserId = value.user - 1)
    );
  }

  private breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public onBack() {
    this.location.back();
  }

  public toggleCvInfo(): void {
    this.isCvInfoHide = !this.isCvInfoHide;
  }

  private breadcrumbHome: string;
  private breadcrumbEmployee: string;

  public ngOnInit(): void {
    this.onBreadcrumbsChange();
    const id = this.activatedRouter.params.subscribe(
      (value) => (this.employeeId = value.user)
    );
    this.employee$ = this.employeeService.getEmployeeById(this.employeeId);
    this.employee$.subscribe((value: Employee) => {
      this.currentEmployee = value;
      this.onBreadcrumbsChange();
    });

    this.onLangChange();
    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.employee'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbEmployee =
          this.translateService.instant('pages.employee');
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
            name: this.currentEmployee?.firstName!,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
