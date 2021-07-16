import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  html = document.documentElement;
  height = this.html.clientHeight;

  constructor(private translateService: TranslateService) { }

  switchLanguage(): void {
    this.translateService.use('ru');
  }

  public ngOnInit(): void {

  }
}
