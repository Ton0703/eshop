import * as TYPES from '../types'
import axios from '../../utils/axios'

export const login = ({name, password}) => {
       return dispatch => axios.post('/user/login', {name, password}).then(res => {
           dispatch({
            type: TYPES.USER_LOGIN,
            payload: res.data
        })
       })
}

export const register = ({name, password, email}) => {
    return dispatch => axios.post('/user/register', {name, password, email}).then(res => {
        dispatch({
            type: TYPES.USER_REGISTER,
            payload: res.data
        }) 
    }) 
}

export const clear = () => {
    return ({
        type: TYPES.CLEAR_ERROR_MSG
    })
}