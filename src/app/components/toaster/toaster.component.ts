import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastEvent } from 'src/app/models/ToastEvent.model';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.sass'],
})
export class ToasterComponent implements OnInit {
  currentToasts: ToastEvent[] = [];
  toastHidingDelay: number = environment.toastHidingDelay;
  autoHideErrorToast: boolean = environment.autoHideErrorToast;

  constructor(
    private toastService: ToastService,
    private changerDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    this.toastService.toastEvents$.subscribe((toasts) => {
      const currentToast: ToastEvent = {
        type: toasts.type,
        message: toasts.message,
      };
      this.currentToasts.push(currentToast);
      this.changerDetectorRef.detectChanges();
    });
  }

  dispose(index: number) {
    this.currentToasts.splice(index, 1);
    this.changerDetectorRef.detectChanges();
  }
}
