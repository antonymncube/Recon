// src/app/state/app.reducers.ts
import { ActionReducerMap } from '@ngrx/store';
 import {invoiceReducer } from '../../app/features/invoice/store/reducers/Invoice.reducer'
import { AppState } from './types/app.state';
import supplierReducer from '../features/supplier/store/reducers/suppleir.reducer';


export const reducers: ActionReducerMap<AppState> = {
  invoice:invoiceReducer ,
  suppleir: supplierReducer
  
};
