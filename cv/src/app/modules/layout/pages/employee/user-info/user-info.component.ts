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
  public firstName: string | null;
  public lastName: string | null;
  public email: string | null;
  public specialization: string | null;

  constructor(private location: Location) {}

  ngOnInit() {
    this.firstName = localStorage.getItem('user-firstName');
    this.lastName = localStorage.getItem('user-lastName');
    this.email = localStorage.getItem('user-email');
    this.specialization = localStorage.getItem('user-specialization');
  }

  public onBack() {
    this.location.back();
  }
}
