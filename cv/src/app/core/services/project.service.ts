import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { endpoint } from 'src/app/shared/constants/endpoind.constants';
import { Project } from '../../shared/interfaces/project.interface';
import { MockService } from 'src/app/shared/mocks/services/mock.service';
import { USE_MOCK } from 'src/app/shared/constants/use-mock.constants';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private _mockProjects = new BehaviorSubject<Project[]>(
    this.mockService.projectsGenerate()
  );

  public get mockProjects(): Project[] {
    return this._mockProjects.value;
  }

  public get mockProjects$(): Observable<Project[]> {
    return this._mockProjects.asObservable();
  }

  public setMockProjects(projects: Project[]): void {
    this._mockProjects.next(projects);
  }

  constructor(private http: HttpClient, private mockService: MockService) {}

  public foundAllProjects(): Observable<Project[]> {
    if (USE_MOCK) {
      return this.mockProjects$;
    }

    return this.http.get<Project[]>(`${endpoint}/project`);
  }

  public getProjectById(id: any, params: any): Observable<Project> {    
    if (USE_MOCK) {
      return of(this.mockProjects.find((project) => project.id === id));
    }

    return this.http.get<Project>(`${endpoint}/project/${id}`, {
      params: params,
    });
  }

  public addProject(project: Project): Observable<Project> {
    if (USE_MOCK) {
      this.setMockProjects([...this.mockProjects, project]);

      return of(project);
    }

    return this.http.post<Project>(`${endpoint}/project`, project);
  }

  public updateProject(project: Project): Observable<Project> {
    if (USE_MOCK) {
      const updatedProjects = this.mockProjects.map((mockProject) =>
      project.id === mockProject.id ? project : mockProject
      );

      this.setMockProjects(updatedProjects);

      return of(project);
    }

    return this.http.put<Project>(`${endpoint}/project/${project.id}`, project);
  }

  public deleteProject(id: any): Observable<any> {
    if (USE_MOCK) {
      const filteredProjects = this.mockProjects.filter((mockProject) =>
        id !== mockProject.id
      );

      this.setMockProjects(filteredProjects);

      return of(this.mockProjects);
    }

    return this.http.delete<any>(`${endpoint}/project/${id}`);
  }
}
