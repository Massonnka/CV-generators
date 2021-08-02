import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Themes } from '../../shared/constants/themes.constants';

@Injectable({ providedIn: 'root' })
export class StateService {
  public theme = new BehaviorSubject(Themes.Light);
}
