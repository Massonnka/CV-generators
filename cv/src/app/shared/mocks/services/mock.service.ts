import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../interfaces/employees.interface';
import { range, uniqueId } from 'lodash-es';
import { Project } from '../../interfaces/project.interface';

@Injectable({ providedIn: 'root' })
export class MockService {
  constructor() {}

  public employeeGenerate(): Employee {
    return {
      id: uniqueId(),
      firstName: 'Testname',
      lastName: 'Lastname',
      email: 'test@gmail.com',
      department: 'JavaScript',
      specialization: 'Angular',
    };
  }

  public employeesGenerate(): Employee[] {
    return range(0, 30).map(() => this.employeeGenerate());
  }

  public projectGenerate(): Project {
    return {
      id: uniqueId(),
      name: 'Project Name',
      startDate: '11-05-2023',
      endDate: '11-05-2023',
      teamSize: 6,
    };
  }

  public projectsGenerate(): Project[] {
    return range(0, 30).map(() => this.projectGenerate());
  }
}
