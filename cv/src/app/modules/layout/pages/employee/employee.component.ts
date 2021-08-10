import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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

  private breacrumbHome: string;
  private breacrumbEmployee: string;

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

    this.translateService
      .get(['pages.home', 'pages.employee'])
      .subscribe((translations) => {
        this.breacrumbHome = this.translateService.instant(
          translations['pages.home']
        );
        this.breacrumbEmployee = this.translateService.instant(
          translations['pages.employee']
        );
      });

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: this.breacrumbHome,
            isDisabled: true,
          },
          {
            url: '/layout/employee',
            name: this.breacrumbEmployee,
            isDisabled: true,
          },
        ],
      })
    );
  }

  public addItem(): void {
    this.router.navigate(['/layout/employee/addinfo']);
  }
}
