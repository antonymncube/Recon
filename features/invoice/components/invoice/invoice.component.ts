import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/types/app.state';
import { InvoiceData } from '../../../types/invoice.types';
import { addInvoice } from '../../store/action/invoice.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectError, selectInvoices, selectLoading } from '../../store/selectors/invoice.selectors';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent implements OnInit {
 
  invoiceForm: FormGroup;
  invoices$: Observable<InvoiceData[]> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<any> | undefined;
  
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.invoiceForm = this.fb.group({
      type: ['', Validators.required],
      FromCompany: ['', Validators.required],
      InvoiceDate: ['', Validators.required],
      InvoiceNumber: ['', Validators.required],
      DueDate: ['', Validators.required],
      Reference: [''],
      PONumber: [''],
      PaymentTerms: [''],
      CustomerAccountNumber: [''],
      LineItems: [[]],
      InvoiceAmount: [''],
      TotalTax: [''],
      TotalAmount: [''],
      Currency: ['']
    });
   

  }

  ngOnInit() {
    this.invoices$ = this.store.pipe(select(selectInvoices));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
  }

  onSubmit(): void {
      const invoice: InvoiceData = this.invoiceForm.value;
      this.store.dispatch(addInvoice({ invoice }));
      this.invoiceForm.reset();

      console.log( 'lest see the kind of data that is being saved  ' + this.invoices$)
  }
}
