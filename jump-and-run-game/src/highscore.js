import React from 'react';
import { Link } from 'react-router-dom';
import { enterFullscreen } from './fullscreen';

const Highscorepage = () => {
	return (
		<div id='highscorediv'>
		 <h1>Highscores</h1>
            <Link to='/' onClick={enterFullscreen}>Go to Startpage</Link>
		</div>
	)
};


export { Highscorepage } ;