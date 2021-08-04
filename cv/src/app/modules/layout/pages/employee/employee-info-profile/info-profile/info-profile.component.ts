import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoProfileComponent implements OnInit {
  public employees$: Observable<Employee>;
  public employeeId: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) { }

  public onBack() {
    this.location.back();
  }

  public ngOnInit() {
    const id = this.activatedRouter.params.subscribe(value => this.employeeId = value.user);
    this.employees$ = this.employeeService.GetEmployeeById(this.employeeId);
  }

}
