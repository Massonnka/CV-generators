import { Location } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  constructor(private location: Location) {}

  public onBack() {
    this.location.back();
  }
}
