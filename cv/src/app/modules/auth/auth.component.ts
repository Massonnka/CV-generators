import { HtmlParser } from '@angular/compiler';
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
  height = Math.max(
    document.body.scrollHeight,
    this.html.scrollHeight,
    document.body.offsetHeight,
    this.html.offsetHeight,
    document.body.clientHeight,
    this.html.clientHeight
  );

  constructor(private translateService: TranslateService) {}

  switchLanguage(): void {
    this.translateService.use('ru');
  }

  public ngOnInit(): void {
    document.body.style.overflow = "hidden";
  }
}
