import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { endpointmock } from "src/app/shared/constants/endpointmock.constants";
import { Employee } from "../interfaces/employees.interface";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    constructor(private http: HttpClient) { }

    public foundAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${endpointmock}/cv`);
    }

    public getEmployeeById(id: any): Observable<Employee> {
        return this.http.get<Employee>(`${endpointmock}/cv/${id}`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${endpointmock}/cv`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${endpointmock}/cv/${employee.id}`, employee);
    }

    public deleteEmployee(id: any): Observable<any> {
        return this.http.delete<any>(`${endpointmock}/cv/${id}`);
    }

}