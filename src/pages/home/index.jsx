import React from 'react'
import './index.scss'
import Header from '@/components/header'
import Carousel from '@/components/carousel1' 
import Collection from '@/components/collection'
import Card from '../../components/card'


function Home() {
    return (
        <div className='home'>
            <div className="home-page">
              <Header />
              <div className="slogan">
                  relaxing. luxury. usual
              </div>
            </div>
            <section className='section1'>
                <Carousel />
            </section>
            <section className='section2'>
               <Collection />
            </section>
            <section className='section3'>
                <div className="left">
                    <span>
                        Ain't No Sunshine
                    </span>
                    <span>
                        If it be love indeed, tell me how much.
                    </span>
                </div>
                <div className="right"></div>
            </section>
            <section className='section4'>
                <div className="title">
                    Tops
                </div>
                <div className="product-list">
                    <Card />
                </div>
            </section>
        </div>
    )
}

export default Home
