import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from 'src/app/employees';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeProfileComponent implements OnInit {
  public employees = EMPLOYEES;

  public cves: any = [
    { name: 'cv 1' },
    { name: 'cv 2' },
    { name: 'cv 3' },
    { name: 'cv 4' },
    { name: 'cv 5' },
  ];

  public currentUserId: number;

  constructor(private route: ActivatedRoute, private location: Location, private breadcrumbService: BreadcrumbService) {
    route.params.subscribe((value) => {
      this.currentUserId = value.user - 1;
    });
  }

  onBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.breadcrumbService.set('@Employee', 'Employee');
  }
}
