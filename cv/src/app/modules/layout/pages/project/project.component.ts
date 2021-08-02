import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { Observable } from 'rxjs';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/interfaces/project.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[] = [];
  public isLoading = false;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private cdRef: ChangeDetectorRef,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[] = [];

  public ngOnInit(): void {
    this.isLoading = true;
   
    this.projectService.FoundAllProjects().subscribe(value => {
      this.projects = value; 
      this.isLoading = false; 
      this.cdRef.markForCheck();
      console.log('during subscribtion', this.projects)});

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
            url: '/layout/project',
            name: 'Project',
            isDisabled: false,
          },
        ],
      })
    );
    
    console.log('after subscribtion', this.projects);
  }

  public addItem(): void {
    this.router.navigate(['/layout/project/addinfo']);
  }
}
