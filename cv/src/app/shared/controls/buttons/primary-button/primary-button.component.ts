import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
