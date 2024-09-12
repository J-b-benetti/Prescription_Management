import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationAdministration } from './models/medication.model';


@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private apiUrl = 'https://fhir.alliance4u.io/api/medication-administration';

  constructor(private http: HttpClient) {}

  postMedicationAdministration(data: any): Observable<any> {

    // Nettoyage
    if (data.occurenceDateTime == "") {
      delete data['occurenceDateTime'];
    }

    if (data.subPotentReason[0].text == "") {
      delete data['subPotentReason'];
    }

    // Construction de la payload
    const payload = {
      resourceType: 'MedicationAdministration',
      ...data
    };
    console.log('Payload:', payload);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //return this.http.post(this.apiUrl, data, { headers });
    return this.http.post<any>(this.apiUrl, payload, { headers })
  }
}