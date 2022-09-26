export interface Invoice {
  id: string;
  invoiceNumber: string;
  customerId: string;

  issuedDate: string;
  dueDate: string;
  billingAddress: {
    name: string;
    company: string;
    city: string;
    country: string;
  };
  paymentMethod: {
    method: string;
    accountName: string;
    accountNumber: string;
    routingNumber: string;
  };
  total: number;
  items: InvoiceItem[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  address: {
    postalCode: string;
    city: string;
    state: string;
    country: string;
    street: string;
  };
}

export interface InvoiceItem {
  id: string;
  name: string;
  hours: number;
  rate: number;
  tax: number;
  total: number;
}
