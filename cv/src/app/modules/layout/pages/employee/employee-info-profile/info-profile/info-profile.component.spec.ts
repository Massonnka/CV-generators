import { HttpClientModule } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { InfoProfileComponent } from './info-profile.component';

describe('InfoProfileComponent', () => {
  let component: InfoProfileComponent;
  let fixture: ComponentFixture<InfoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
      ],
      imports: [
        RouterTestingModule,
        BrowserDynamicTestingModule,
        TranslateModule,
        HttpClientModule
      ],
      declarations: [InfoProfileComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
