import { Component } from '@angular/core';
import { MedicationService } from '../medication.service';
import { FormsModule } from '@angular/forms';
import { MedicationAdministration } from '../models/medication.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medication-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medication-form.component.html',
  styleUrl: './medication-form.component.css'
})
export class MedicationFormComponent {
  medicationAdministration: MedicationAdministration = {
    medication: { reference: { reference: '' } },
    subject: { reference: 'patient/66dfed4999cb8a001240f32f'},
    status: '',
    occurenceDateTime: '',
    isSubPotent: false,
    subPotentReason: [],
    performer: [
      {
        function: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/performer-function', //http://terminology.hl7.org/CodeSystem/performer-function
                               code: 'doctor', //doctor
                               display: 'Doctor' //Doctor
                            }]
                  },
        actor: { reference: { reference: '' } } //practitioner/66dffe7399cb8a001240f331
      }
    ]
  };

  newSubPotentReason: string = '';
  successMessage: string = '';

  constructor(private medicationService: MedicationService) { }

  onSubmit(): void {
    this.medicationAdministration.occurenceDateTime = this.formatToUTC(this.medicationAdministration.occurenceDateTime);
    this.medicationService.postMedicationAdministration(this.medicationAdministration).subscribe(response => {
      this.successMessage = 'Le formulaire a été enregistré avec succès!';
      this.resetForm();

      console.log('Données envoyées avec succès:', response);
    }, error => {
      this.successMessage = 'Une erreur est survenue lors de l\'envoi des données.';

      console.error('Erreur lors de l\'envoi des données:', error);
    });
  }

  private formatToUTC(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toISOString();
  }

  onSubPotentChange(isSubPotent: boolean): void {
    this.medicationAdministration.isSubPotent = isSubPotent;

    if (isSubPotent) {
      this.medicationAdministration.status = 'completed';
    } else {
      this.medicationAdministration.status = 'stopped'; 
    }

    if (!isSubPotent) {
      this.medicationAdministration.subPotentReason = [];  // Réinitialise la raison si la dose est complète
    }
  }

  addSubPotentReason(): void {
    if (this.newSubPotentReason) {
      this.medicationAdministration.subPotentReason.push(this.newSubPotentReason);
      this.newSubPotentReason = ''; // Clear the input field
    }
  }

  resetForm(): void {
    this.medicationAdministration = {
      medication: { reference: { reference: '' } },
      subject: { reference: 'patient/66dfed4999cb8a001240f32f' },
      status: '',
      occurenceDateTime: '',
      isSubPotent: false,
      subPotentReason: [],
      performer: [
        {
          function: { coding: [{ system: 'http://terminology.hl7.org/CodeSystem/performer-function', code: 'doctor', display: 'Doctor' }] },
          actor: { reference: { reference: '' } }
        }
      ]
    };
    this.newSubPotentReason = '';
  }
}
