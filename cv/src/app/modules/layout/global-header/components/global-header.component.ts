import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalHeaderComponent implements OnInit {
  public languages = ['en', 'ru'];


  constructor(private translateService:
    TranslateService, private store: Store,
    private router: Router,
    public authService: AuthService,
    private token: AuthService) { }
  public currentLanguage = this.translateService.currentLang || 'en';

  switchLanguage(language: string): void {
    this.translateService.use(language);
    this.currentLanguage = language;
  }

  ngOnInit(): void {

  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['auth/log-in']);
  }
}
