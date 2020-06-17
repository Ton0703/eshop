import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

function AuthRoute({component: Component, ...rest}) {
    const name = useSelector(state => state.user.name)
    return (
        <Route 
           {...rest}
           render = { props => name ? <Redirect to='/' /> : <Component {...props} />}
        />
    )
}

export default AuthRoute
