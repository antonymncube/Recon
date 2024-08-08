import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvoiceData } from '../../types/invoice.types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://localhost:3000/invoices';

  constructor(private http: HttpClient) {}

  postInvoice(invoice: InvoiceData): Observable<InvoiceData> {
    return this.http.post<InvoiceData>(this.apiUrl, invoice);
  }
}
