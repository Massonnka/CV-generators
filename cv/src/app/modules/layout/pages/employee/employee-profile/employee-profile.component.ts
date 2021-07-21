import { Location } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from 'src/app/employees';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
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

  public currentUserId = 1;

  constructor(private route: ActivatedRoute, private location: Location) {
    route.params.subscribe((value) => {
      this.currentUserId = value.user;
    });
  }

  cancel() {
    this.location.back();
  }

  ngOnInit(): void { }
}
