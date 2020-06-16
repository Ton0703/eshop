import * as TYPES from '../types'

const initialState = {
    name:'',
    token:''
}

export default function userReducer(state = initialState, action){
    const { payload, type } = action
    switch(type){
        case TYPES.USER_LOGIN:
            return {...state, name: payload.name}
        default:
            return state
    }
}