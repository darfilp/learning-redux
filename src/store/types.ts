export interface Customers {
    customers: string[]
}

export interface CustomersAction {
    type: string,
    customer: string
}

export interface Money {
    cash: number
}

export interface ActionType {
    type: string,
    payload: number
}