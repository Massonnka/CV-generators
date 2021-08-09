import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
