import { Component } from '@angular/core';
import { EventTypes } from './models/EventTypes.model';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ToastApp';

  EventTypes = EventTypes;

  constructor(private toastService: ToastService) {}

  showToast(type: EventTypes) {
    switch (type) {
      case EventTypes.Success:
        this.toastService.showSuccessToast(
          'Success toast title',
          'This is a success toast message.'
        );
        break;
      case EventTypes.Warning:
        this.toastService.showWarningToast(
          'Warning toast title',
          'This is a warning toast message.'
        );
        break;
      case EventTypes.Error:
        this.toastService.showErrorToast(
          'Error toast title',
          'This is an error toast message.'
        );
        break;
      default:
        this.toastService.showInfoToast(
          'Info toast title',
          'This is an info toast message.'
        );
        break;
    }
  }
}
