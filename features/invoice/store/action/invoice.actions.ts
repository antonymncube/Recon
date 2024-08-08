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
 
  