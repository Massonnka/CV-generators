import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.scss']
})
export class InfoProfileComponent {

  constructor(private location: Location) { }

  onBack() {
    this.location.back();
  }
}
