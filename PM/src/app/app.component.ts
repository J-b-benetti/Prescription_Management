import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {ServicePMService} from "./service-pm.service";
import {MedicationRequest} from "./service-pm.service";
import {MedicationrequestComponent} from "./medicationrequest/medicationrequest.component";
import{MypaymentsComponent} from "./mypayments/mypayments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MedicationrequestComponent, MypaymentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PM';



}
