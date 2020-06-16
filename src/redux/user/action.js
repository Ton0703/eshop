import * as TYPES from '../types'

export const login = ({name, password}) => {
       return ({
           type: TYPES.USER_LOGIN,
           payload: {
               name,
               password
           }
       })
}

export const register = ({name, password, email}) => {
    return ({
        type: TYPES.USER_REGISTER,
        payload: {
            
        }
    })
}