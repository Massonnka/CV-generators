import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  public cves:any = [
    {name: 'cv 1'},
    {name: 'cv 2'},
    {name: 'cv 3'},
    {name: 'cv 4'},
    {name: 'cv 5'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
