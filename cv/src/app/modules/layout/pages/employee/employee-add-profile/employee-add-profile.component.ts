import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';

@Component({
  selector: 'app-employee-add-profile',
  templateUrl: './employee-add-profile.component.html',
  styleUrls: ['./employee-add-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeAddProfileComponent implements OnInit {
  public isCvInfoHide = true;
  public isLoading = false;

  public cves: any = [
    {
      name: 'cv',
      index: 1,
      employee: {
        email: '',
        lastname: '',
        skills: '',
        specialization: '',
        department: '',
      },
      projects: [],
    },
  ];

  public currentUserId: number;
  private currentCvId: number = 1;

  constructor(
    private location: Location,
    private store: Store<{ breadcrumbs: Breadcrumb }>
  ) { }

  private breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  public onBack() {
    this.location.back();
  }

  public toggleCvInfo(index: number): void {
    this.isCvInfoHide = !this.isCvInfoHide;
    this.currentCvId = index - 1;
    console.log(this.currentCvId);
  }

  public addCv(): void {
    this.cves = [
      ...this.cves,
      {
        name: 'cv',
        index: this.cves.length + 1,
        employee: {
          email: '',
          lastname: '',
          skills: '',
          specialization: '',
          department: '',
        },
        projects: [],
      },
    ];
  }

  public addProject(
    name: string,
    startDate: string,
    endDate: string,
    id: string,
    teamSize: number
  ): void {
    this.cves[this.currentCvId].projects.push({
      name,
      startDate,
      endDate,
      id,
      teamSize,
    });

    console.log(this.cves);
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
            url: '/layout/employee/addInfo',
            name: 'Info',
            isDisabled: true,
          },
        ],
      })
    );
  }
}
