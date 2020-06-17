import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

import { AiOutlineInstagram, AiOutlineUser, AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";

function Header() {
    return (
        <div className='header'>
            <div className='ins'>
                <AiOutlineInstagram />
            </div>
            <div className="logo">
                <span>
                   SHOMA
                </span>
            </div>
            <div className="info">
                <div className="user">
                    <Link to='/user'>
                         <AiOutlineUser />
                    </Link>
                </div>
                <div className="cart">
                    <AiOutlineShoppingCart />
                </div>
            </div>
            <div className="menu-list">
                <div className="menu">
                    <div className="title">
                        Products
                        <AiOutlineRight />
                    </div>
                    <div className="list">
                        <ul>
                            <li>Co-ord Sets</li>
                            <li>T-shorts</li>
                            <li>Tank Tops</li>
                            <li>Pants</li>
                            <li>Scarf Marks</li>
                        </ul>
                    </div>
                </div>
                <div className="menu">
                <div className="title">
                    About
                    <AiOutlineRight />
                </div>
                    <div className="list">
                        <ul>
                            <li>Concept</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
