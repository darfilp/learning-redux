import { CustomersAction } from "./types";

const defaultState = {
  customers: [
    {
      id: 0,
      name: "Саня",
    },
    {
      id: 1,
      name: "Даша",
    },
  ],
};

export const customersReducer = (
  state = defaultState,
  action: CustomersAction,
) => {
    console.log(action, 2)
  switch (action.type) {

    case "добавить клиента":
      return { ...state, customers: [...state.customers, action.customer] };
    case "удали клиента":
        return {...state, customers: [...state.customers.filter(customer => customer.id !== action.customer.id)]}
    default:
        return state;        
  }

};
