 // src/app/invoice/selectors/invoice.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../../../store/types/app.state';
import { InvoiceState } from '../../../types/invoice.state';

// Create a feature selector to select the invoice state from the app state
export const selectInvoiceState = createFeatureSelector<AppState, InvoiceState>('invoice');

// Selector to get all invoices
export const selectInvoices = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.invoices
);

// Selector to get loading state
export const selectLoading = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.loading
);

// Selector to get error state
export const selectError = createSelector(
  selectInvoiceState,
  (state: InvoiceState) => state.error
);

// A shorter alias for selectInvoices if needed
export const invoices = selectInvoices;
