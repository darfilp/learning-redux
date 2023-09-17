import { combineReducers, createStore } from "redux";
import { moneyReduser } from "./moneyReducer";
import { customersReducer } from "./customerReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    money: moneyReduser,
    customers: customersReducer,
})



export const store = createStore(rootReducer, composeWithDevTools())