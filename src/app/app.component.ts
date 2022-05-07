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
}
