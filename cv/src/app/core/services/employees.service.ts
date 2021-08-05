import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { endpointmock } from "src/app/shared/constants/endpointmock.constants";
import { Employee } from "../interfaces/employees.interface";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    constructor(private http: HttpClient) { }

    public FoundAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${endpointmock}/cv`);
    }

    public GetEmployeeById(id: any): Observable<Employee> {
        return this.http.get<Employee>(`${endpointmock}/cv/${id}`);
    }

    public AddEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${endpointmock}/cv`, employee);
    }

    public UpdateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${endpointmock}/cv/${employee.id}`, employee);
    }

    public DeleteEmployee(id: any): Observable<any> {
        return this.http.delete<any>(`${endpointmock}/cv/${id}`);
    }
}