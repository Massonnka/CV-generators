import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from 'src/app/shared/constants/endpoind.constants';
import { Project } from '../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private http: HttpClient) { }

  public foundAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${endpoint}/project`);
  }

  public getProjectById(id: any, params: any): Observable<Project> {
    return this.http.get<Project>(`${endpoint}/project/${id}`, {
      params: params,
    });
  }

  public addProject(Project: Project): Observable<Project> {
    return this.http.post<Project>(`${endpoint}/project`, Project);
  }

  public updateProject(Project: Project): Observable<Project> {
    return this.http.put<Project>(`${endpoint}/project/${Project.id}`, Project);
  }

  public deleteProject(id: any): Observable<any> {
    return this.http.delete<any>(`${endpoint}/project/${id}`);
  }
}
