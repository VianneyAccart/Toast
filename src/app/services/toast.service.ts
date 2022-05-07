import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventTypes } from '../models/EventTypes.model';
import { ToastEvent } from '../models/ToastEvent.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents$: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents$ = this._toastEvents.asObservable();
  }

  showSuccessToast(message: string) {
    this._toastEvents.next({
      message,
      type: EventTypes.Success,
    });
  }

  showInfoToast(message: string) {
    this._toastEvents.next({
      message,
      type: EventTypes.Info,
    });
  }

  showWarningToast(message: string) {
    this._toastEvents.next({
      message,
      type: EventTypes.Warning,
    });
  }

  showErrorToast(message: string) {
    this._toastEvents.next({
      message,
      type: EventTypes.Error,
    });
  }
}
