import React from 'react'
import './index.scss'

function Card({title, url}) {
    return (
        <div className='card'>
            <div className="pic">
                <img src={`/image/${url}.jpg`} alt=""/>
            </div>
            <div className="card-title">
                {title}
            </div>
        </div>
    )
}

export default Card
