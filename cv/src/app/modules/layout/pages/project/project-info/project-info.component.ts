import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectInfoComponent implements OnInit {
  constructor(
    private location: Location,
    private breadcrumbService: BreadcrumbService
  ) {}

  onBack() {
    this.location.back(); // <-- go back to previous location on cancel
    this.breadcrumbService.set('@ProjectInfo', 'ProjectInfo');
  }

  ngOnInit(): void {}
}
