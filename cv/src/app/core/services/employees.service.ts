import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { endpointmock } from 'src/app/shared/constants/endpointmock.constants';
import { USE_MOCK } from 'src/app/shared/constants/use-mock.constants';
import { MockService } from 'src/app/shared/mocks/services/mock.service';
import { Employee } from '../../shared/interfaces/employees.interface';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private _mockEmployees = new BehaviorSubject<Employee[]>(
    this.mockService.employeesGenerate()
  );

  public get mockEmployees(): Employee[] {
    return this._mockEmployees.value;
  }

  public get mockEmployees$(): Observable<Employee[]> {
    return this._mockEmployees.asObservable();
  }

  public setMockEmployees(employees: Employee[]): void {
    this._mockEmployees.next(employees);
  }

  constructor(private http: HttpClient, private mockService: MockService) {}

  public foundAllEmployees(): Observable<Employee[]> {
    if (USE_MOCK) {
      return this.mockEmployees$;
    }

    return this.http.get<Employee[]>(`${endpointmock}/cv`);
  }

  public getEmployeeById(id: any): Observable<Employee> {
    if (USE_MOCK) {
      return of(this.mockEmployees.find((employee) => employee.id === id));
    }

    return this.http.get<Employee>(`${endpointmock}/cv/${id}`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    if (USE_MOCK) {
      this.setMockEmployees([...this.mockEmployees, employee]);

      return of(employee);
    }

    return this.http.post<Employee>(`${endpointmock}/cv`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    if (USE_MOCK) {
      const updatedEmployees = this.mockEmployees.map((mockEmployee) =>
        employee.id === mockEmployee.id ? employee : mockEmployee
      );

      this.setMockEmployees(updatedEmployees);

      return of(employee);
    }

    return this.http.put<Employee>(
      `${endpointmock}/cv/${employee.id}`,
      employee
    );
  }

  public deleteEmployee(id: any): Observable<any> {
    if (USE_MOCK) {
      const filteredEmployees = this.mockEmployees.filter((mockEmployee) =>
        id !== mockEmployee.id
      );

      this.setMockEmployees(filteredEmployees);

      return of(this.mockEmployees);
    }

    return this.http.delete<any>(`${endpointmock}/cv/${id}`);
  }
}
