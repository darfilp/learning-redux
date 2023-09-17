import { CustomersAction } from "./types"

const defaultState = {
    customers: []
}

export const customersReducer = (state = defaultState, action: CustomersAction) => {
    return state
}