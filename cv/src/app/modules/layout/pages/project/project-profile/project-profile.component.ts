import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROJECT } from 'src/app/project';

@Component({
  selector: 'app-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit {

  public project = PROJECT;

  public currentUserId = 1;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((value) => {
      this.currentUserId = value.user;
    });
  }

  ngOnInit(): void {
  }

}
