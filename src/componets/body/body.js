import React, { useState } from 'react';
import '../body/body.css';

const Body = () => {
	const [game, setGame] = useState('select value');
	return (
		<div className="main_body">
			<div className="middle_section_container">
				<div className="middle_section_limiter">
					<h1>Condimentum concectetur</h1>
					<select value={game} className="game_selector" onChange={e => {setGame(e.target.value)}}>
						<option value='select a game'>
							select a game
						</option>
						<option value='mk1'>
							MK1
						</option>
						<option value='ffxiv'>
							FFXIV
						</option>
					</select>
				</div>
			</div>
		</div>
	);
};
export default Body;
