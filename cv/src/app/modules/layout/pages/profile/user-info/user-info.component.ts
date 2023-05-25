import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { EmployeeService } from 'src/app/core/services/employees.service';
import { Gender } from 'src/app/shared/enums/gender.enums';
import { LanguageLevel } from 'src/app/shared/enums/language-levels.enums';
import { ProfessionalLevel } from 'src/app/shared/enums/professional-levels.enums';
import { Specializations } from 'src/app/shared/enums/specializations.enums';
import { Employee } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  public Specializations = Specializations;
  public ProfessionalLevel = ProfessionalLevel;
  public LanguageLevel = LanguageLevel;
  public Gender = Gender;

  public userInfo: Employee;

  constructor(
    private location: Location,
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const userId = localStorage.getItem('user-id');

    this.employeeService
      .getEmployeeById(userId)
      .pipe(filter((user) => Boolean(user)))
      .subscribe((user) => {
        this.userInfo = user;
        this.cdr.markForCheck();
      });
  }

  public onBack() {
    this.location.back();
  }
}
