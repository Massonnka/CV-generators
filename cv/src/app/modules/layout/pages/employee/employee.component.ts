import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { NzTableSortFn } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Employee } from 'src/app/shared/interfaces/employees.interface';
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
  public query: string = '';
  public page: number = 1;
  public count: number = 0;
  public tableSize: number = 8;

  public sortFirst: NzTableSortFn<Employee> | null = (
    a: Employee,
    b: Employee
  ) => a.firstName.localeCompare(b.firstName);
  public sortLast = (a: Employee, b: Employee) =>
    a.lastName.localeCompare(b.lastName);
  public sortEmail = (a: Employee, b: Employee) =>
    a.email.localeCompare(b.email);
  public sortSpecialization = (a: Employee, b: Employee) =>
    a.specialization.toString().localeCompare(b.specialization.toString());

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

    this.fetchPosts();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));

    this.onLangChange();
    this.onBreadcrumbsChange();
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
            isDisabled: true,
          },
        ],
      })
    );
  }

  public fetchPosts(): void {
    this.employeeService.foundAllEmployees().subscribe((value) => {
      this.store.dispatch(setEmployee({ employees: value }));
      this.employees = value;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }

  public onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }

  public addItem(): void {
    this.router.navigate(['/layout/employee/addinfo']);
  }
}
