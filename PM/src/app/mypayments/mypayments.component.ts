import {Component, inject} from '@angular/core';
import {Claim, MedicationRequest, ServicePMService} from "../service-pm.service";
import {PaymentComponent} from "../payment/payment.component";
import {DatePipe, registerLocaleData} from "@angular/common";
import{CurrencyPipe} from "@angular/common";
import localFr from '@angular/common/locales/fr'; // Spanish locale


@Component({
  selector: 'app-mypayments',
  standalone: true,
  imports: [PaymentComponent,DatePipe,CurrencyPipe],
  templateUrl: './mypayments.component.html',
  styleUrl: './mypayments.component.css'
})
export class MypaymentsComponent {
  private ServicePM = inject(ServicePMService);
claims : Claim[] =[]
  errorMessage: string | null = null;



  ngOnInit(): void {
    registerLocaleData(localFr );
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
