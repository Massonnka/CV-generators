import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-cv-info',
  templateUrl: './cv-info.component.html',
  styleUrls: ['./cv-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvInfoComponent implements OnInit {

  public employees$: Observable<Employee>;
  public employeeCves: any = [];
  public employeeId: string;
  public isVisible = false;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private cdRef: ChangeDetectorRef,
    private location: Location) { }

  public onBack() {
    this.location.back();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  editItem(employee: Employee) {
    this.router.navigate(['/layout/employee/addinfo'], {
      state: {
        options: {
          employee,
        }
      }
    });
  }

  ngOnInit(): void {
    const id = this.activatedRouter.params.subscribe(value => this.employeeId = value.user);
    this.employees$ = this.employeeService.getEmployeeById(this.employeeId);
    this.employees$.subscribe(value => {
      this.employeeCves = value.cv;
      this.cdRef.markForCheck();
    });
  }
}
