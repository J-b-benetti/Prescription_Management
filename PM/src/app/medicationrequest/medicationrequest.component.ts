import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MedicationRequest, ServicePMService} from "../service-pm.service";
import {inject} from "@angular/core";
import {MedicationFormComponent} from "../medication-form/medication-form.component";
import {DatePipe, registerLocaleData} from "@angular/common";
import localFr from '@angular/common/locales/fr';


@Component({
  selector: 'app-medicationrequest',
  standalone: true,
  imports: [
    MedicationFormComponent,DatePipe
  ],
  templateUrl: './medicationrequest.component.html',
  styleUrl: './medicationrequest.component.css'
})
export class MedicationrequestComponent implements OnInit {


private ServicePM = inject(ServicePMService);
clickOrdonnance : boolean = false;
  selectedMedicationRequest: MedicationRequest | null = null;

  medRequest: MedicationRequest[] =[];
  errorMessage: string | null = null;
constructor(private ServicePMService : ServicePMService) {}
  ngOnInit(): void {
    registerLocaleData(localFr);
    this.ServicePMService.getMedicationRequests() .subscribe({
      next: () => {
        this.medRequest = this.ServicePM.users().filter(m=>m.subject.id =="66dfed4999cb8a001240f32f");
        //console.log('Données récupérées:', this.medRequest);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des Medication Requests'; // message d'erreur
        console.error('Erreur lors de la récupération:', err);
      }
    });

  }
  getMedicationRequests() :void{ this.ServicePMService.getMedicationRequests()}

  toggleClickOrdonnance(medRequestparam : MedicationRequest){
  this.clickOrdonnance = !this.clickOrdonnance;
    this.selectedMedicationRequest = medRequestparam;

  }
}