import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbsenceService } from 'src/app/core/services/absence.service';
import { CARDSABSENCE } from 'src/app/shared/constants/absence.constants';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidayComponent implements OnInit {
  public cardsAbsence: any = CARDSABSENCE;
  public vacationPeriods$: Observable<any[]>;
  public vacationPeriods: any[] = [];
  public isLoading = false;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private cdRef: ChangeDetectorRef,
    private absenceService: AbsenceService,
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.fetchPosts();
  }

  public fetchPosts(): void {
    this.absenceService.foundAllEmployees().subscribe((value) => {
      this.vacationPeriods = value;
      this.isLoading = false;
      this.cdRef.markForCheck();
    });
  }

}
