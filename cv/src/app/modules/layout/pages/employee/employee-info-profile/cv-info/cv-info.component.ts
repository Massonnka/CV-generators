import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/core/interfaces/employees.interface';
import { Project } from 'src/app/core/interfaces/project.interface';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-cv-info',
  templateUrl: './cv-info.component.html',
  styleUrls: ['./cv-info.component.scss']
})
export class CvInfoComponent implements OnInit {
  public projects$: Observable<Project[]>;
  public projects: Project[] = [];

  public employees$: Observable<Employee>;
  public employeeId: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private projectService: ProjectService,
    private location: Location) { }

  public onBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.projects$ = this.projectService.FoundAllProjects();
    this.projects$.subscribe(projects => this.projects = projects);
    const id = this.activatedRouter.params.subscribe(value => this.employeeId = value.user);
    this.employees$ = this.employeeService.GetEmployeeById(this.employeeId);
  }

}
