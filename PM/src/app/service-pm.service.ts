import { sign } from "crypto";
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface MedicationRequest {
  id: string;
  identifier: [{ system: string, value: string }];
  subject: { id: string };
  status: string;
  medication?: { concept?: { coding?: [{ display?: string }] } };
  authoredOn?: Date;
  note: [{ authorReference: { reference: string, display: string }, text: string }]
  requester: { reference: string, display: string };


  dispenseRequest: {
    validityPeriod: {
      start: string, end:
      string
    }
  }
  ;
}

export interface Claim {
  id: string;
  created: string;
  item: [{ unitPrice: { value: number } }];
}


@Injectable({
  providedIn: 'root'
})
export class ServicePMService {
  private http = inject(HttpClient);
  public users = signal<MedicationRequest[]>([])
  public claims = signal<Claim[]>([])
  url = 'https://fhir.alliance4u.io'

  constructor() {
  }

  getMedicationRequests() {
    console.log(this.http.get<MedicationRequest[]>('https://fhir.alliance4u.io/api/medication-request').pipe(tap(users => this.users.set(users))).subscribe({
      next: (data) => console.log('Données reçues:', data),
      error: (err) => console.error('Erreur lors de la récupération:', err)
    }));
    return this.http.get<MedicationRequest[]>('https://fhir.alliance4u.io/api/medication-request').pipe(tap(users => this.users.set(users)));
  }
  getPaymentClaims() {
    console.log(this.http.get<Claim[]>('https://fhir.alliance4u.io/api/claim').pipe(tap(claims => this.claims.set(claims))).subscribe({
      next: (data) => console.log('Données reçues:', data),
      error: (err) => console.error('Erreur lors de la récupération:', err)
    }));
    return this.http.get<Claim[]>('https://fhir.alliance4u.io/api/claim').pipe(tap(claims => this.claims.set(claims)));

  }

}
