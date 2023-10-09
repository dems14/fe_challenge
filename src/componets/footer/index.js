import React from 'react';
import '../footer/footer.css';
import TrustPilot from '../../assets/trustPilot-removebg-preview.png';
import logo from '../../assets/logo.svg';
import SocialButtons from '../social_buttons/';
import PaymentOptions from '../../assets/paymentMethods.png'

const Footer = () => {
	return (
		<div className="footer">
            <div className='payment_options_container'>
                <div className='payment_options_limiter'>
                <img src={PaymentOptions} alt="paymentOptions" className="payment_options" /> <span className='payment_text'> and 50+ more</span>
                </div>
            </div>
            <SocialButtons />
			<div className="contain">
				<div className="col logo_footer_container">
					<ul>
						<li>
							<img src={logo} alt="logo" className="footer_logo" />
						</li>
						<li className='email_link'>support@chicksgold.com</li>
					</ul>
				</div>
				<div className="col">
					<h1>Chicks Gold</h1>
					<ul>
						<li>Games</li>
						<li>About</li>
						<li>Blog</li>
						<li>Sitemap</li>
					</ul>
				</div>
				<div className="col">
					<h1>Support</h1>
					<ul>
						<li>Contact Us</li>
						<li>FAQ</li>
					</ul>
				</div>
				<div className="col">
					<h1>Legal</h1>
					<ul>
						<li>Privacy Policy</li>
						<li>Terms of Service</li>
						<li>Copyright Policy</li>
					</ul>
				</div>
				<div className="col trustpilot_container">
					<img className="trust_pilot_logo" src={TrustPilot} alt="trustpilotlogo"></img>
				</div>
				<div className="clearfix"></div>
			</div>
            <div className='copyright'><span>© 2017-2020 chicksgold.com. All Right Reserved</span></div>
		</div>
	);
};
export default Footer;
