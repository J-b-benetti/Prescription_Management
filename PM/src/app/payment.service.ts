import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'https://fhir.alliance4u.io/api/payment-notice'; // Remplace par ton URL d'API

  constructor(private http: HttpClient) { }

  postPayment(data: any): Observable<any> {

    const payload = {
      resourceType: 'PaymentNotice',
      ...data
    };
    console.log('Payload:', payload);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, payload, { headers })  }
}
