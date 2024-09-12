import { Component } from '@angular/core';
import {Payment} from '../models/payment';  // Assure-toi d'avoir ce fichier
import { PaymentService } from '../payment.service'; // Service pour envoyer les données
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  successMessage: string = '';
  errorMessage: string = '';

  // Données en dur
  paymentNotice: Payment = {
    identifier: [ { system: 'example-system', value: '12345' } ],
    status: 'active',
    created: new Date().toISOString(),
    recipient: { reference: 'organization/3' },
    amount: { value: 100.00, currency: 'USD' },
  };

  constructor(private paymentNoticeService: PaymentService) { }

  onSubmit(): void {
    this.paymentNoticeService.postPaymentNotice(this.paymentNotice).subscribe({
      next: (response) => {
        this.successMessage = 'Les données ont été envoyées avec succès!';
        console.log('Données envoyées avec succès:', response);
      },
      error: (error) => {
        this.errorMessage = 'Une erreur est survenue lors de l\'envoi des données.';
        console.error('Erreur lors de l\'envoi des données:', error);
      }
    });
  }

}