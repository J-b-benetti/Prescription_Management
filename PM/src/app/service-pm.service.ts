import {sign} from "crypto";

export interface MedicationRequest {
 id : string
}

import { Injectable,inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePMService {
  private http = inject(HttpClient);
  public users = signal<MedicationRequest[]>([])
  url = 'https://fhir.alliance4u.io'

  constructor() {
  }

  getMedicationRequests(){
    console.log(this.http.get<MedicationRequest[]>('https://fhir.alliance4u.io/api/medication-request').pipe(tap(users => this.users.set(users))).subscribe({
      next: (data) => console.log('Données reçues:', data),
      error: (err) => console.error('Erreur lors de la récupération:', err)
    }));
    return this.http.get<MedicationRequest[]>('https://fhir.alliance4u.io/api/medication-request').pipe(tap(users => this.users.set(users)));
  }
}
