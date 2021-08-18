import { Component, OnInit } from '@angular/core';
import { adminIcon } from 'src/app/shared/constants/images.constants';

@Component({
  selector: 'app-profile-cv',
  templateUrl: './profile-cv.component.html',
  styleUrls: ['./profile-cv.component.scss']
})
export class ProfileCvComponent implements OnInit {
  public adminIcon = adminIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
