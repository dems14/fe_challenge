import React from 'react';
import '../social_buttons/social_buttons.css';

const SocialButtons = () => {
	return (
		<div className="social_buttons_container">
			<div className='social_buttons_limiter'>
				<button className="round-button">
					<div className="round-button-circle">
						<span className="round-button">F</span>
					</div>
				</button>

				<button className="round-button">
					<div className="round-button-circle">
						<span className="round-button">I</span>
					</div>
				</button>

				<button className="round-button">
					<div className="round-button-circle">
						<span className="round-button">X</span>
					</div>
				</button>

				<button className="round-button">
					<div className="round-button-circle">
						<span className="round-button">D</span>
					</div>
				</button>
			</div>
		</div>
	);
};
export default SocialButtons;
