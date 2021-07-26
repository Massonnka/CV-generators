import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { PROJECTS } from 'src/app/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  constructor(
    private elRef: ElementRef,
    private breadcrumbService: BreadcrumbService,
  ) {}

  public projects = PROJECTS;

  ngOnInit(): void {
    this.breadcrumbService.set('@Project', 'Project');

    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';
  }
}
