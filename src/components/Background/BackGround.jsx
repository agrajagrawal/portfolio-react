import React from 'react';
import Particles from 'react-particles-js';
import { useMediaQuery } from 'react-responsive'
function BackGround() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' });
    return (
    <Particles
	// className="particles"
	className={isTabletOrMobile?"particles2":"particles"}
    params={{
	    "particles": {
	        "number": {
	            "value": (isTabletOrMobile?30:50)
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    );
}
export default BackGround;