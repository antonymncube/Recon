import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/types/app.state';
import { InvoiceData } from '../../../types/invoice.types';
import { addInvoice } from '../../store/action/invoice.actions';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectError, selectInvoices, selectLoading } from '../../store/selectors/invoice.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ItemsDilogComponent } from '../items-dilog/items-dilog.component';
import { ActivatedRoute } from '@angular/router';


 
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
  invoice!: InvoiceData;
  invoiceid: string ='';
  
  constructor(private fb: FormBuilder, private store: Store<AppState>,private matDialog:MatDialog,private route: ActivatedRoute) {
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
      InvoiceAmount: ['', this.moneyValidator],
      TotalTax: ['',this.moneyValidator],
      TotalAmount: ['',this.moneyValidator],
      Currency: ['']
    });
   

  }

  ngOnInit() {
    this.invoices$ = this.store.pipe(select(selectInvoices));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));

    const invoiceId = this.route.snapshot.paramMap.get('id');
     console.log("lets see the id  "+  invoiceId)
    this.store.select(selectInvoices).subscribe(invoices => {
      this.invoice = invoices.find(invoice => invoice.id === invoiceId)!;
      this.invoiceForm.patchValue(this.invoice);
    });
    
  }

  opendialog(){
    this.matDialog.open(ItemsDilogComponent,{
      width:'70%',
      height:'76%'

    })

  }

  onSubmit(): void {
      const invoice: InvoiceData = this.invoiceForm.value;

      if(this.invoiceForm.valid){
        this.store.dispatch(addInvoice({ invoice }));
        this.invoiceForm.reset();
      }
       else{
        alert("fill all the required field")
       }

      console.log( 'lest see the kind of data that is being saved  ' + this.invoices$)
  }

    moneyValidator(control: AbstractControl): ValidationErrors | null {
    // The value from the form control
    const value = control.value;
    
    // Check if the value is empty or follows the monetary format
    return !value || /^\d+(\.\d{1,2})?$/.test(value) ? null : { invalidMoney: true };
  }
}
