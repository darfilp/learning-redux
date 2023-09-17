export interface Customers {
  customers: string[];
}

export interface CustomersAction {
  type: string;
  customer: {
    name: string,
    id: number
  };
}

export interface Money {
  cash: number;
}

export interface ActionType {
  type: string;
  payload: number;
}
