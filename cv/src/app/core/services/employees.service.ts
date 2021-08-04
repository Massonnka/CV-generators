import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { endpointmock } from "src/app/shared/constants/endpointmock.constants";
import { Employee } from "../interfaces/employees.interface";

@Injectable({ providedIn: 'root' })
export class EmployeeService {
    constructor(private http: HttpClient) { }

    public FoundAllEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${endpointmock}/employees`);
    }

    public GetEmployeeById(id: any): Observable<Employee> {
        return this.http.get<Employee>(`${endpointmock}/employees/${id}`);
    }

    public AddEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${endpointmock}/employees`, employee);
    }

    public UpdateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${endpointmock}/employees/${employee.id}`, employee);
    }

    public DeleteEmployee(id: any): Observable<any> {
        return this.http.delete<any>(`${endpointmock}/employees/${id}`);
    }
}