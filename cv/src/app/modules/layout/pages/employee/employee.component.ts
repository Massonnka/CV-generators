import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Router } from '@angular/router';

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
    private store: Store<{ breadcrumbs: Breadcrumb[] }>) { }

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

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: 'Home',
            isDisabled: true,
          },
          {
            url: '/layout/employee',
            name: "Employee",
            isDisabled: true,
          },
        ],
      })
    );
  }

  public addItem(): void {
    this.router.navigate(['/layout/employee/addinfo']);
  }


  public deleteItem(employee: Employee) {
    this.employees$ = this.employeeService.FoundAllEmployees();
    console.log(this.employees$);

    if (!confirm(`Are you sure you want to delete ${employee.firstName} ?`)) {
      return;
    }
    this.employeeService.DeleteEmployee(employee.id).subscribe(() => {
      this.employees$ = this.employeeService.FoundAllEmployees();
    });
  }
}
