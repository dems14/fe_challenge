import React from 'react';
import './header.css';
import logo from '../../assets/logo.svg';
import User from '../../assets/User.svg';
import ShoppinCart from '../../assets/Shopping_Cart.svg';

export default function Header() {
	return (
		<div className="header">
			<a href="#default" className="logo">
				<img src={logo} height={70} width={160} alt="logo" />
			</a>
			<div className="separator"></div>
			<div className="header-left">
				<a href="#currency">CURRENCY</a>
				<a href="#items">ITEMS</a>
				<a href="#accounts">ACCOUNTS</a>
				<a href="#services">SERVICES</a>
				<a href="#swap">SWAP</a>
				<a href="#sell">SELL</a>
			</div>
			<div className="header-right">
				<a href="#currency">USD</a>
				<a href="#cart">
					<img className="cart_icon" src={ShoppinCart} height={20} width={20} alt="user_icon"></img>
					<span>CART (5)</span>
				</a>
				<a className="sign_in_button" href="#sign">
					SIGN IN <img className="user_icon" src={User} height={20} width={20} alt="user_icon"></img>
				</a>
			</div>
		</div>
	);
}
