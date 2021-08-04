import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/core/interfaces/project.interface';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-cv-info',
  templateUrl: './cv-info.component.html',
  styleUrls: ['./cv-info.component.scss']
})
export class CvInfoComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.FoundAllProjects();
    this.projects$.subscribe(projects => this.projects = projects);
  }

}
