import React from 'react';
import { Link } from 'react-router-dom';
import { enterFullscreen } from './fullscreen';


const Loginpage = () => {
	return (
		<div id='logindiv'>
		 <h1>Loginpage</h1>
            <Link to='/' onClick={enterFullscreen}>Go to Startpage</Link>
		</div>
	)
};


export { Loginpage } ;