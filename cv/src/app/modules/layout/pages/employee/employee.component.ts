import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  public users = [
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
    { firstname: 'Vasya', lastname: 'Pupkin', email: 'v.pupkin@gmail.com', department: 'Javascript', specalization: 'Angular', },
  ];
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';
  }
}
