import React from 'react';
import "./header_mobile.css"
import logo from '../../assets/logo.svg'

export default function HeaderMobile() {
    return (
        <div className="top-nav">
            <div className='center-logo'>
                <img src={logo} height={80} alt='logo' />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
            </ul>
        </div>
    );
}