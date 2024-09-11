import {Component, OnInit} from '@angular/core';
import {MedicationRequest, ServicePMService} from "../service-pm.service";
import {inject} from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicationrequest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicationrequest.component.html',
  styleUrl: './medicationrequest.component.css'
})
export class MedicationrequestComponent implements OnInit {
private ServicePM = inject(ServicePMService);
clickOrdonnance : boolean= false;
  medRequest: MedicationRequest[] =[];
  errorMessage: string | null = null;
constructor(private ServicePMService : ServicePMService) {}
  ngOnInit(): void {
    this.ServicePMService.getMedicationRequests() .subscribe({
      next: () => {
        this.medRequest = this.ServicePM.users(); // Accéder au signal et récupérer les données
        console.log('Données récupérées:', this.medRequest);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des Medication Requests'; // message d'erreur
        console.error('Erreur lors de la récupération:', err);
      }
    });

  }
  // //getMedicationRequests() :void{ this.ServicePMService.getMedicationRequests()}
  // trackByMedId(index: number, med: MedicationRequest): string {
  //   return med.id; // Retourne l'ID unique pour le suivi des éléments

  getMedicationRequests() :void{ this.ServicePMService.getMedicationRequests()}

  toggleClickOrdonnance(){
    console.log(this.clickOrdonnance);
  this.clickOrdonnance = !this.clickOrdonnance;
  }
}
