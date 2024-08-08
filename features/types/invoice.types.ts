export interface LineItem {
    description: string;
    Quantity: string;
    unitAmount: string;
    lineAmount: string;
  }
  
  export interface InvoiceData {
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
  }

  export interface InvoicePostResponse {
    id: string; // Or any other unique identifier returned by the API
    message: string; // Or other relevant information
  }