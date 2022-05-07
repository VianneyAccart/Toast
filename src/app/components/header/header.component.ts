import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {}

  save() {
    this.toastService.showSuccessToast('Sauvegarde réussie.');
  }

  error() {
    this.toastService.showErrorToast(
      'Une erreur est survenue, veuillez réessayer.'
    );
  }

  info() {
    this.toastService.showInfoToast('Bonjour Vianney !');
  }

  warning() {
    this.toastService.showWarningToast('Cette action sera bientôt désactivée.');
  }
}
