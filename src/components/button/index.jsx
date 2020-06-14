import React from 'react'
import './index.scss'

function Button({color}) {
    return (
        <div className='global-btn' style={{color: `${color}`, borderColor:`${color}`}}>
            <span>
                view products
            </span>
        </div>
    )
}

export default Button
