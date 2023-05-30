import { Injectable } from '@angular/core';
import { range, uniqueId } from 'lodash-es';
import { Gender } from '../../enums/gender.enums';
import { LanguageLevel } from '../../enums/language-levels.enums';
import { ProfessionalLevel } from '../../enums/professional-levels.enums';
import { Employee } from '../../interfaces/employees.interface';
import { Project } from '../../interfaces/project.interface';
import { Vacancy } from '../../interfaces/vacancies.interface';

@Injectable({ providedIn: 'root' })
export class MockService {
  constructor() {}

  public employeeGenerate(): Employee {
    return {
      id: uniqueId(),
      firstName: 'Petr',
      middleName: 'Ivanovich',
      lastName: 'Ivanov',
      email: 'test@gmail.com',
      birthDate: '06-20-2002',
      gender: Gender.Male,
      phoneNumber: '+375298904686',
      location: 'Belarus, Vitebsk',
      professionalLevel: ProfessionalLevel.Middle,
      englishLevel: LanguageLevel.B2,
      emergencyPhone: '+375295150919',
      hiringDate: '02-09-2021',
      rate: 1,
      managerId: '2',
      officeManagerId: '3',
      resourceManagerId: '4',
      specialization: 0,
      createdAt: new Date().toISOString(),
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

  public vacationPeriod(): any {
    return [
      {
        id: uniqueId(),
        beginningOfPeriod: '01.09.2021',
        endOfPeriod: '31.08.2022',
        vacationDays: 19,
        vacationRest: 4
      },
      {
        id: uniqueId(),
        beginningOfPeriod: '01.09.2022',
        endOfPeriod: '31.08.2023',
        vacationDays: 19,
        vacationRest: 19
      }
    ];
  }
}
