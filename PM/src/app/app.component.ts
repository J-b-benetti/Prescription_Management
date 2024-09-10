import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServicePMService} from "./service-pm.service";
import {MedicationRequest} from "./service-pm.service";
import {MedicationrequestComponent} from "./medicationrequest/medicationrequest.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MedicationrequestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PM';



}
