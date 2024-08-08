import { InvoiceData } from "./invoice.types";

export interface InvoiceState {
    invoices:  InvoiceData[] ;
    error: Error | null,  
    loading:boolean
  }