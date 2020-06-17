import * as TYPES from '../types'
const initialState = []

export default function CartReducer(state = initialState, action){
    const { payload, type } = action
    switch(type){
        case TYPES.CART_ADD:
            return [payload, ...state]
        default:
            return state
    }
}