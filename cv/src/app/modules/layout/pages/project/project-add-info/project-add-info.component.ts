import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/shared/controls/breadcrumb/interfaces/breadcrumbs.interface';
import { setBreadcrumbs } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.actions';
import { selectBreadcrumb } from 'src/app/shared/controls/breadcrumb/store/breadcrumbs.selectors';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-project-info',
  templateUrl: './project-add-info.component.html',
  styleUrls: ['./project-add-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectAddInfoComponent implements OnInit {
  public breadcrumbs$: Observable<Breadcrumb[]> =
    this.store.select(selectBreadcrumb);
  public breadcrumbs: Breadcrumb[];

  constructor(
    private location: Location,
    private translateService: TranslateService,
    private store: Store<{ breadcrumbs: Breadcrumb[] }>
  ) {}

  private breadcrumbHome: string;
  private breadcrumbProject: string;
  private breadcrumbAddInfo: string;

  public ngOnInit(): void {
    this.onLangChange();

    this.breadcrumbs$.subscribe((value) => (this.breadcrumbs = value));
    this.onBreadcrumbsChange();
  }

  public onBack(): void {
    this.location.back();
  }

  private onLangChange() {
    this.translateService
      .stream(['pages.home', 'pages.project', 'pages.info'])
      .subscribe(() => {
        this.breadcrumbHome = this.translateService.instant('pages.home');
        this.breadcrumbProject = this.translateService.instant('pages.project');
        this.breadcrumbAddInfo = this.translateService.instant('pages.info');
        this.onBreadcrumbsChange();
      });
  }

  private onBreadcrumbsChange(): void {
    this.store.dispatch(
      setBreadcrumbs({
        breadcrumbs: [
          {
            url: '/layout',
            name: this.breadcrumbHome,
            isDisabled: true,
          },
          {
            url: '/layout/employee',
            name: this.breadcrumbProject,
            isDisabled: false,
          },
          {
            url: '/layout/employee/info',
            name: this.breadcrumbAddInfo,
            isDisabled: true,
          },
        ],
      })
    );
  }
}
