import React from 'react'
import Card from '@/components/typeCard'
import './index.scss'

const list = [
    {
        url: 'col1',
        title: 'Co-ord Sets'
    },
    {
        url: 'col2',
        title: 'T-Shirts'
    },
    {
        url: 'col3',
        title: 'Pants'
    },
    {
        url: 'col4',
        title: 'Tank Tops'
    }
]

function Collection() {
    return (
        <div className='collection'> 
            <div className="title">
                Collections
            </div>
            <div className="collection-list">
                {list.map((item, index)  => (
                    <Card title={item.title} url={item.url} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Collection
