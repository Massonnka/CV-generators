import { Injectable } from '@angular/core';
import { range, uniqueId } from 'lodash-es';
import { Employee } from '../../interfaces/employees.interface';
import { Project } from '../../interfaces/project.interface';
import { Vacancy } from '../../interfaces/vacancies.interface';

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

  public vacancyGenerate(): Vacancy {
    return {
      id: uniqueId(),
      name: 'Angular Developer',
      requirements: 'Brain, English C5+',
      description:
        'Developer for brand new application for human resources managment',
      salary: 3000,
      endDate: '05-16-2023',
      phone: '+375298904686',
    };
  }

  public vacanciesGenerate(): Vacancy[] {
    return range(0, 30).map(() => this.vacancyGenerate());
  }
}
