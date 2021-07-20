import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { EMPLOYEES } from 'src/app/employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  public users = EMPLOYEES;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';
  }
}
