import { createAction, props } from "@ngrx/store";
import { InvoiceData } from "../../../types/invoice.types";

export const addInvoice = createAction(
    '[Invoice] Add Invoice',
    props<{ invoice: InvoiceData }>()
  );
 
  export const addInvoiceSuccess = createAction(
    '[Invoice] Add Invoice Success',
    props<{ response: any }>()  
  );
  
   
  export const addInvoiceFailure = createAction(
    '[Invoice] Add Invoice Failure',
    props<{ error: any }>()  
  );

  export const loadInvoices = createAction(
    '[Invoice] Load Invoices'
  );
  
  
  export const loadInvoicesSuccess = createAction(
    '[Invoice] Load Invoices Success',
    props<{ invoices: InvoiceData[] }>()   
  );
  
 
  export const loadInvoicesFailure = createAction(
    '[Invoice] Load Invoices Failure',
    props<{ error: any }>()   
  );
 
  