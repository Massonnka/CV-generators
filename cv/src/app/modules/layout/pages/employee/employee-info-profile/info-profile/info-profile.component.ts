import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoProfileComponent implements OnInit {
  public employees$: Observable<Employee[]>;
  public employee$: Observable<Employee>;
  public employeeId: string;
  public isLoading = false;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  public onBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    const id = this.activatedRouter.params.subscribe(
      (value) => (this.employeeId = value.user)
    );
    this.employee$ = this.employeeService.GetEmployeeById(this.employeeId);

    id.unsubscribe();
  }

  public editItem(employee: Employee): void {
    this.router.navigate(['/layout/employee/addinfo'], {
      state: {
        options: {
          employee,
        },
      },
    });
  }

  public deleteItem(employee: Employee): void {
    this.employees$ = this.employeeService.FoundAllEmployees();

    if (!confirm(`Are you sure you want to delete ${employee.firstName} ?`)) {
      return;
    }
    this.employeeService.DeleteEmployee(employee.id).subscribe(() => {
      this.employees$ = this.employeeService.FoundAllEmployees();
    });
    this.router.navigate(['/layout/employee']);
  }
}
