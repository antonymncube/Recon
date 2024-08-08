// src/app/services/supplier.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Supplier } from '../Types/supplier.state';

@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class SupplierService {

  private apiUrl = 'http://localhost:3000/suppliers'; // Replace with your API URL

  constructor(private http: HttpClient) {}

 
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl)
      .pipe(
        
      );
  }

  postSuppliers(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl, supplier);
  }
}
