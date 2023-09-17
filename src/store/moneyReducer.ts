import { ActionType, Money } from "./types"

const defaultState =  {
    cash: 0
}

export const moneyReduser = (state = defaultState, action: ActionType) => {
    switch(action.type) {
        case 'пополнить':
            return {...state, cash: state.cash + action.payload}
        case 'снять':
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}