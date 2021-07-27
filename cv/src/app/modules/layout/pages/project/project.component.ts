import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { PROJECTS } from 'src/app/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { User } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {

  currentUser: Object | any = {};

  constructor(
    private elRef: ElementRef,
    private breadcrumbService: BreadcrumbService,
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { }

  public projects = PROJECTS;

  ngOnInit(): void {
    this.breadcrumbService.set('@Project', 'Project');

    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';

    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
  }
}
