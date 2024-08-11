import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../store/types/app.state';
import { select, Store } from '@ngrx/store';
import { InvoiceData } from '../../../types/invoice.types';
import { Observable } from 'rxjs';
import { selectInvoices } from '../../store/selectors/invoice.selectors';
import { loadInvoices } from '../../store/action/invoice.actions';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent implements OnInit {
  
  invoices$!: Observable<InvoiceData[]>;
  invoiceForm!: FormGroup;
  filePreview: SafeResourceUrl | null = null;
  fileType: string | null = null;  
   

  constructor(private store: Store<AppState>,private router : Router,private fb : FormBuilder, private sanitizer: DomSanitizer) {
    this.invoiceForm = this.fb.group({
      type: ['Invoice', Validators.required],
      FromCompany: ['', Validators.required],
      InvoiceDate: ['', Validators.required],
      InvoiceNumber: ['', Validators.required],
      DueDate: ['', Validators.required],
      Reference: [''],
      PONumber: [''],
      PaymentTerms: [''],
      CustomerAccountNumber: [''],
      LineItems: [[]],
      InvoiceAmount: [''  ],
      TotalTax: ['' ],
      TotalAmount: [''],
      Currency: [''],
      invoiceFileName: ['']
    });
  }
 
  ngOnInit(): void {
    this.store.dispatch(loadInvoices());

    this.invoices$ = this.store.pipe(select(selectInvoices))
    this.invoices$.subscribe(invoices => {
      
    });
  
   }

   processinvoice(invoice: InvoiceData){
    this.router.navigate(['edit-invoice',invoice.id])
   }

   onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileType = file.type;
      console.log('File type:', this.fileType);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.filePreview = this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result);
        console.log('File preview URL:', this.filePreview);
      };
      reader.onerror = (error) => {
        console.error('File reading error:', error);
      };
      reader.readAsDataURL(file);
    } else {
      this.filePreview = null;
      this.fileType = null;
      console.log('No file selected.');
    }
  }
   
}