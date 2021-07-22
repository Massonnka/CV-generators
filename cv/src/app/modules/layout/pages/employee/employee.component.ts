import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { EMPLOYEES } from 'src/app/employees';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  public users = EMPLOYEES;
  constructor(
    private elRef: ElementRef,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set('@Employee', 'Employee');

    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';
  }
}
