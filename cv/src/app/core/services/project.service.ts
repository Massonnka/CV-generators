import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { endpoint } from "src/app/shared/constants/endpoind.constants";
import { Project } from "../interfaces/project.interface";

@Injectable({ providedIn: 'root' })
export class ProjectService {
    constructor(private http: HttpClient) { }

    public FoundAllProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${endpoint}/project`);
    }

    public GetProjectById(_id: any): Observable<Project> {
        return this.http.get<Project>(`${endpoint}/project/${_id}`);
    }

    public AddProject(Project: Project): Observable<Project> {
        return this.http.post<Project>(`${endpoint}/project`, Project);
    }

    public UpdateProject(Project: Project): Observable<Project> {
        return this.http.put<Project>(`${endpoint}/project/${Project._id}`, Project);
    }

    public DeleteProject(_id: any): Observable<any> {
        return this.http.delete<any>(`${endpoint}/project/${_id}`);
    }
}