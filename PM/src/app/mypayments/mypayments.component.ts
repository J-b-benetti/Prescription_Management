import {Component, inject} from '@angular/core';
import {Claim, MedicationRequest, ServicePMService} from "../service-pm.service";
import {PaymentComponent} from "../payment/payment.component";
import{DatePipe} from "@angular/common";

@Component({
  selector: 'app-mypayments',
  standalone: true,
  imports: [PaymentComponent,DatePipe],
  templateUrl: './mypayments.component.html',
  styleUrl: './mypayments.component.css'
})
export class MypaymentsComponent {
  private ServicePM = inject(ServicePMService);
claims : Claim[] =[]
  errorMessage: string | null = null;


  ngOnInit(): void {
    this.ServicePM.getPaymentClaims() .subscribe({
      next: () => {
        this.claims = this.ServicePM.claims(); // Accéder au signal et récupérer les données
        console.log('Données récupérées:', this.claims);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des Medication Requests'; // message d'erreur
        console.error('Erreur lors de la récupération:', err);
      }
    });

  }
}
