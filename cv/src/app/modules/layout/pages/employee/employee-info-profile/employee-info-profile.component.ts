import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FoundProject, Project } from 'src/app/core/interfaces/interfaces';
import { ProjectService } from 'src/app/core/services/project.service';
import { EMPLOYEES } from 'src/app/models/employees';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';

@Component({
  selector: 'app-employee-info-profile',
  templateUrl: './employee-info-profile.component.html',
  styleUrls: ['./employee-info-profile.component.scss']
})
export class EmployeeInfoProfileComponent implements OnInit {
  projects$: Observable<FoundProject[]>;
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
    private projectService: ProjectService,
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
    this.projects$ = this.projectService.FoundAllProjects();
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
            name: 'Employee',
            isDisabled: false,
          },
          {
            url: '/layout/employee/info',
            name: 'Profile Info',
            isDisabled: true,
          },
        ],
      })
    );
  }

}
