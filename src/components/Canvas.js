import React from 'react';
import Particles from 'react-particles-js';
   
const AnimatedBg = () => {
    return (
        <Particles
        className='canvas_container'
        params={{
            "particles": {
                "number": {
                    "value": 500,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 20,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 4
                    }
                }
            }
        }} />
    )
}

export default AnimatedBg;