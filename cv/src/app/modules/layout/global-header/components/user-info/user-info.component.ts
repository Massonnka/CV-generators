import { Location } from '@angular/common';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent implements OnInit {
  firstName = localStorage.getItem('user-firstName');
  lastName = localStorage.getItem('user-lastName');
  email = localStorage.getItem('user-email');
  specialization = localStorage.getItem('user-specialization');

  constructor(private location: Location) { }

  ngOnInit() { }

  public onBack() {
    this.location.back();
  }
}
