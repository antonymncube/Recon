 // src/app/state/actions/action.ts
import { createAction, props } from "@ngrx/store";
import { Supplier } from "../../Types/supplier.state";
 

export const addSupplier = createAction(
  '[Supplier] Add Supplier',
  props<{ supplier: Supplier }>()
);

export const addSupplierSuccess = createAction(
  '[Supplier] Add Supplier Success',
  props<{ supplier: Supplier }>()
);

export const addSupplierFailure = createAction(
  '[Supplier] Add Supplier Failure',
  props<{ error: any }>()
);
