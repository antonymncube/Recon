import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { InvoiceService } from '../../services/invoice.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { addInvoice, addInvoiceFailure, addInvoiceSuccess, loadInvoices, loadInvoicesFailure, loadInvoicesSuccess } from '../action/invoice.actions';

@Injectable()
export class InvoiceEffects {

  constructor(
    private invoiceService: InvoiceService,
    private actions$: Actions
  ) {}

  loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInvoices),  
      mergeMap(() =>
        this.invoiceService.getInvoice().pipe(  
          map(invoices => loadInvoicesSuccess({ invoices })),  
          catchError(error => {
            console.error('Failed to load invoices:', error); 
            return of(loadInvoicesFailure({ error }));  
          })
        )
      )
    )
  );
  
  addInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addInvoice),
      mergeMap(action =>
        this.invoiceService.postInvoice(action.invoice).pipe(
          tap(response => console.log('Invoice successfully added:', response)),
          map(response => addInvoiceSuccess({ response })),
          catchError(error => {
            console.error('Failed to add invoice:', error);
            return of(addInvoiceFailure({ error }));
          })
        )
      )
      
    )
  );
}
