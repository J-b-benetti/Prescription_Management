import { Routes } from '@angular/router';
import { MedicationFormComponent } from './medication-form/medication-form.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    //{ path: 'paiements', component: PaiementsComponent },
    //{ path: 'agenda', component: AgendaComponent },
    { path: '', component: WelcomeComponent },  // Route pour "/"
    { path: 'medication-form', component: MedicationFormComponent },
    { path: '**', redirectTo: '' }
];