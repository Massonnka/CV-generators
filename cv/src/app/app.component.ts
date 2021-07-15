import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {
  }

  public ngOnInit(): void {
    this.translateService.setDefaultLang(environment.localization.defaultLanguage);

    // setTimeout(() => {
    //   this.translateService.use('ru')
    // }, 5000);
    
  }
}
