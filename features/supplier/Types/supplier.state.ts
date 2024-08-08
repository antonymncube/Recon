 // src/app/state/supplier.state.ts
export interface Supplier {
    SupplierName: string;
    Bank: string;
    BankAccountNumber: string;
    VatNo: string;
    CompanyReg: string;
    Other: string | null;
    StatementText: string | null;
    InvoiceText: string | null;
    NotesAI: string;
    ContactId: string;
    DetectionMethod: string;
    payment_terms: string;
    alias: string;
    NotesAI_Invoices: string | null;
  }
  
  export interface SupplierState {
    supplier: Supplier [] | null;
    loading: boolean;
    error: string | null;
  }
  