import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/interfaces/project.interface';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { EMPLOYEES } from 'src/assets/mocks/employees';

@Component({
  selector: 'app-employee-info-profile',
  templateUrl: './employee-info-profile.component.html',
  styleUrls: ['./employee-info-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeInfoProfileComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[];
  public employees = EMPLOYEES;

  public isCvInfoHide = true;

  public cves: any = [{ name: 'cv 1' }];

  public currentUserId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) {
    this.route.params.subscribe(
      (value) => (this.currentUserId = value.user - 1)
    );
  }

  private breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public onBack() {
    this.location.back();
  }

  public toggleCvInfo(): void {
    this.isCvInfoHide = !this.isCvInfoHide;
  }

  public ngOnInit(): void {
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
