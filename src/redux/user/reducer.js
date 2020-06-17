import * as TYPES from '../types'

const initialState = {
    name:'',
    token:'',
    error_msg:''
}

export default function userReducer(state = initialState, action){
    const { payload, type } = action
    switch(type){
        case TYPES.USER_LOGIN:
            return {...state, name: payload.name, token: payload.token, error_msg: payload.error_msg};
        case TYPES.USER_REGISTER:
            return {...state, name: payload.name, token: payload.token, error_msg: payload.error_msg };
        case TYPES.CLEAR_ERROR_MSG:
            return {...state, error_msg: ''}
        default:
            return state
    }
}