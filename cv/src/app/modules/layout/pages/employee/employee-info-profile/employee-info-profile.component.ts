import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EMPLOYEES } from 'src/app/models/employees';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Breadcrumb } from 'xng-breadcrumb/lib/types/breadcrumb';

@Component({
  selector: 'app-employee-info-profile',
  templateUrl: './employee-info-profile.component.html',
  styleUrls: ['./employee-info-profile.component.scss']
})
export class EmployeeInfoProfileComponent implements OnInit {

  public employees = EMPLOYEES;

  public cves: any = [
    { name: 'cv 1' },
    { name: 'cv 2' },
    { name: 'cv 3' },
    { name: 'cv 4' },
    { name: 'cv 5' },
  ];

  public currentUserId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) {
    this.route.params.subscribe((value) => this.currentUserId = value.user - 1);
  }

  private breadcrumbs$: Observable<Breadcrumb[]> = this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  onBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: 'Home ',
          },
          {
            url: '/layout/employee',
            name: ' Employee',
          },
          {
            url: '/layout/employee/info',
            name: ' Profile info',
          },
        ],
      })
    );
  }

}
