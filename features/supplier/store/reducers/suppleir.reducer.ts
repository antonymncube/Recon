 // src/app/state/reducers/supplier.reducer.ts
import { createReducer, on } from "@ngrx/store";  
import { addSupplier, addSupplierSuccess, addSupplierFailure } from "../actions/action"; // Ensure this path is correct
import { SupplierState } from "../../Types/supplier.state";

const initialState: SupplierState = {
  supplier: [],
  loading: true,
  error: null,
};

const supplierReducer = createReducer(
  initialState,
  on(addSupplier, state => ({
    ...state,
    loading: true,
  })),
  on(addSupplierSuccess, (state, { supplier }) => ({
    ...state,
    supplier: [...(state.supplier ?? []), supplier],
    loading: false,
    error: null,
  })),
  on(addSupplierFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export default supplierReducer;
