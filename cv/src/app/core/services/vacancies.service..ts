import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { endpoint } from 'src/app/shared/constants/endpoind.constants';
import { Project } from '../../shared/interfaces/project.interface';
import { MockService } from 'src/app/shared/mocks/services/mock.service';
import { USE_MOCK } from 'src/app/shared/constants/use-mock.constants';
import { Vacancy } from 'src/app/shared/interfaces/vacancies.interface';

@Injectable({ providedIn: 'root' })
export class VacanciesService {
  private _mockVacancies = new BehaviorSubject<Vacancy[]>(
    this.mockService.vacanciesGenerate()
  );

  public get mockVacancies(): Vacancy[] {
    return this._mockVacancies.value;
  }

  public get mockVacancies$(): Observable<Vacancy[]> {
    return this._mockVacancies.asObservable();
  }

  public setMockVacancies(vacancies: Vacancy[]): void {
    this._mockVacancies.next(vacancies);
  }

  constructor(private http: HttpClient, private mockService: MockService) {}

  public foundAllVacancies(): Observable<Vacancy[]> {
    if (USE_MOCK) {
      return this.mockVacancies$;
    }

    return this.http.get<Vacancy[]>(`${endpoint}/vacancies`);
  }

  public getVacancyById(id: any, params: any): Observable<Vacancy> {    
    if (USE_MOCK) {
      return of(this.mockVacancies.find((vacancy) => vacancy.id === id));
    }

    return this.http.get<Vacancy>(`${endpoint}/vacancies/${id}`, {
      params: params,
    });
  }

  public addVacancy(vacancy: Vacancy): Observable<Vacancy> {
    if (USE_MOCK) {
      this.setMockVacancies([...this.mockVacancies, vacancy]);

      return of(vacancy);
    }

    return this.http.post<Vacancy>(`${endpoint}/vacancies`, vacancy);
  }

  public updateVacancy(vacancy: Vacancy): Observable<Vacancy> {
    if (USE_MOCK) {
      const updatedVacancies = this.mockVacancies.map((mockVacancy) =>
      vacancy.id === mockVacancy.id ? vacancy : mockVacancy
      );

      this.setMockVacancies(updatedVacancies);

      return of(vacancy);
    }

    return this.http.put<Vacancy>(`${endpoint}/vacancies/${vacancy.id}`, vacancy);
  }

  public deleteVacancy(id: any): Observable<any> {
    if (USE_MOCK) {
      const filteredVacancies = this.mockVacancies.filter((mockVacancy) =>
        id !== mockVacancy.id
      );

      this.setMockVacancies(filteredVacancies);

      return of(this.mockVacancies);
    }

    return this.http.delete<any>(`${endpoint}/vacancies/${id}`);
  }
}
