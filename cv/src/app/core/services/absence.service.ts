import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { endpointmock } from 'src/app/shared/constants/endpointmock.constants';
import { USE_MOCK } from 'src/app/shared/constants/use-mock.constants';
import { MockService } from 'src/app/shared/mocks/services/mock.service';
import { Employee } from '../../shared/interfaces/employees.interface';

@Injectable({ providedIn: 'root' })
export class AbsenceService {
    private _mockVacationPeriod = new BehaviorSubject<any[]>(
        this.mockService.vacationPeriod()
    );

    public get mockVacationPeriod(): any[] {
        return this._mockVacationPeriod.value;
    }

    public get mockVacationPeriod$(): Observable<any[]> {
        return this._mockVacationPeriod.asObservable();
    }

    public setVacationPeriod(vacationPeriods: any[]): void {
        this._mockVacationPeriod.next(vacationPeriods);
    }

    constructor(private http: HttpClient, private mockService: MockService) {}

    public foundAllEmployees(): Observable<any[]> {
        if (USE_MOCK) {
            return this.mockVacationPeriod$;
        }

        return this.http.get<any[]>(`${endpointmock}/cv`);
    }
}
