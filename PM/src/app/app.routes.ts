import { Routes } from '@angular/router';
import { MedicationrequestComponent } from "./medicationrequest/medicationrequest.component";
import { MypaymentsComponent } from "./mypayments/mypayments.component";

export const routes: Routes = [
  { path: '', component: MedicationrequestComponent },  // Route pour "/"
  { path: 'mes-paiements', component: MypaymentsComponent },
  { path: '**', redirectTo: '' }
];