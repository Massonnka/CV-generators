import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { EMPLOYEES } from 'src/app/employees';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  constructor(private elRef: ElementRef) { }

  public users = EMPLOYEES;

  ngOnInit(): void {
    const content = this.elRef.nativeElement.querySelector('.content');
    content.style.overflow = 'scroll';
  }
}
