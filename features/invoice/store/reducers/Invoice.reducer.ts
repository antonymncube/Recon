 // src/app/features/invoice/store/reducers/invoice.reducer.ts
import { createReducer, on, Action } from '@ngrx/store';
 
import { InvoiceState } from '../../../types/invoice.state';
import { addInvoice, addInvoiceFailure, addInvoiceSuccess, loadInvoices, loadInvoicesFailure, loadInvoicesSuccess } from '../action/invoice.actions';
 
const initialState: InvoiceState = {
  invoices: [],
  error: null,
  loading: false
};

const invoiceReducer = createReducer(
  initialState,
  on(loadInvoices, (state) => ({
    ...state,
    loading: true,    
    error: null        
  })),
  on(loadInvoicesSuccess, (state, { invoices }) => ({
    ...state,
    invoices: invoices,  
    loading: false     
  })),
  on(loadInvoicesFailure, (state, { error }) => ({
    ...state,
    loading: false,    
    error: error       
  })),
  on(addInvoice, state => ({
    ...state,
    loading: true,
     
  })),
  on(addInvoiceSuccess, (state, { response }) => ({
    ...state,
    invoices: [...state.invoices, response],
    loading: false
  })),
  on(addInvoiceFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

export function reducer(state: InvoiceState | undefined, action: Action) {
  return invoiceReducer(state, action);
}

export { invoiceReducer };   
