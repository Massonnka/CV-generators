import { LowerCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setEmployee } from 'src/app/store/employee/employee.actions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  public employees$: Observable<Employee[]>;
  public employees: Employee[] = [];
  public isLoading = false;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private cdRef: ChangeDetectorRef,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  private breadcrumbHome: string;
  private breadcrumbEmployee: string;

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);

  public breadcrumbs: Breadcrumb[];
  public ngOnInit(): void {
    this.isLoading = true;

    this.employeeService.FoundAllEmployees().subscribe((value) => {
      this.store.dispatch(setEmployee({ employees: value }));
      this.employees = value;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));

    this.onLangChange();
    this.onBreadcrumbsChange();
  }
  public addItem(): void {
    this.router.navigate(['/layout/employee/addinfo']);
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.employee'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbEmployee = this.translateService.instant('pages.employee');
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
            isDisabled: true,
          },
        ],
      })
    );
  }
}
