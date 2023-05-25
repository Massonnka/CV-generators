import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BONUSES } from 'src/app/shared/constants/bonuses.constants';
import { CARDS } from 'src/app/shared/constants/cards.constants';
import { CATEGORIES } from 'src/app/shared/constants/categories.constants';
import { TOWNS } from 'src/app/shared/constants/towns.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public cards = CARDS;
  public bonuses = BONUSES;
  public towns = TOWNS;
  public categories = CATEGORIES;
  public date: any = null;
  public dates: any = [
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
    this.date,
  ]

  public validateForm!: UntypedFormGroup;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(
      {
        town: ['', Validators.required],
        categoria: ['', Validators.required],
      }
    );
  }

  public linkPages(page: string): void {
    this.router.navigate([`/layout/${page}`]);
  }
}
