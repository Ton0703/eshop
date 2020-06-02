import React from 'react'
import './index.scss'

import { AiOutlineInstagram, AiOutlineUser, AiOutlineShoppingCart, AiOutlineRight } from "react-icons/ai";

function Header() {
    return (
        <div className='header'>
            <div className='ins'>
                <AiOutlineInstagram />
            </div>
            <div className="logo">SHOMA</div>
            <div className="info">
                <div className="user">
                    <AiOutlineUser />
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
