import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoProfileComponent {
  constructor(private location: Location) {}

  public onBack() {
    this.location.back();
  }
}
