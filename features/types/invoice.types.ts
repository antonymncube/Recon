export interface LineItem {
    description: string;
    Quantity: string;
    unitAmount: string;
    lineAmount: string;
  }
  
  export interface InvoiceData {
    id: string; 
    type: string;
    FromCompany: string;
    InvoiceDate: Date;
    InvoiceNumber: string;
    DueDate: Date;
    Reference: string;
    PONumber: string;
    PaymentTerms: string;
    CustomerAccountNumber: string;
    LineItems: LineItem[];
    InvoiceAmount: string;
    TotalTax: string;
    TotalAmount: string;
    Currency: string;
    invoiceFileName:string;
    invoiceFileBase64: string;
    
  }

  export interface InvoicePostResponse {
    id: string;  
    message: string;  
  }

  export interface Item {
    name: string;
    quantity: number;
    price: number;
    total?: number;  
  }