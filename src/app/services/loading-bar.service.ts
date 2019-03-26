import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {

  isOn = new Subject<boolean>();

  constructor() {
  }

  start() {
    this.isOn.next(true);
  }

  stop() {
    setTimeout(() => {
      this.isOn.next(false);
    }, 1000);
  }
}
