import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = ['en', 'ru'];

  constructor(private translateService: TranslateService) {}
  public currentLanguage = this.translateService.currentLang || 'en';

  switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  ngOnInit(): void {}
}
