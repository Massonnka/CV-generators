import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoundProject, Project } from "../interfaces/interfaces";

@Injectable({ providedIn: 'root' })
export class ProjectService {

    public pathBase: string = "https://innowise-cv-generator.herokuapp.com";
    constructor(private http: HttpClient) { }

    public FoundAllProjects(): Observable<FoundProject[]> {
        return this.http.get<FoundProject[]>(`${this.pathBase}/project`);
    }

    public GetProjectById(_id: any): Observable<Project> {
        return this.http.get<Project>(`${this.pathBase}/project/${_id}`);
    }

    public AddProject(Project: Project): Observable<Project> {
        return this.http.post<Project>(`${this.pathBase}/project`, Project);
    }

    public UpdateProject(Project: Project): Observable<Project> {
        return this.http.put<Project>(`${this.pathBase}/project/${Project._id}`, Project);
    }

    public DeleteProject(_id: any): Observable<any> {
        return this.http.delete<any>(`${this.pathBase}/project/${_id}`);
    }
}