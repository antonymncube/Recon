import { SupplierState } from "../../features/supplier/Types/supplier.state";
import { InvoiceState } from "../../features/types/invoice.state";

 
 

export interface AppState {
  invoice: InvoiceState;
  suppleir:SupplierState
  // Add other feature states here if you have more
}
