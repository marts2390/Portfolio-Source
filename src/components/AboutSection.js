import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

import SkillsList from './SkillsList';
import { PrimaryButton } from './buttons/Buttons';

// const removeScroll = () => {
//     document.getElementById('body').style.overflow = 'visible';
// }

const AboutSection = () => {
    return (
        <div id='aboutSection' className='about_section'>
            <Container style={{height: '100%'}} maxWidth='md'>
                <Fade>
                    <h2 className='title'>About Me</h2>

                    <Grid container spacing={2} alignItems='center'>
                        <Grid item md={7} lg={6}>
                            <div className='about_section_text'>
                                <p>Hi! My names Chris and I'm a front end developer.</p>
                                <p>I have built a broad range of experience from custom Wordpress sites to advanced Netsuite and Suitecommerce Advanced customisations.</p>
                                <p>I'm passionate about modern JavaScript, best practices and applying these to solve complex problems and providing customers with elegant, intuitive solutions.</p>
                                <p>Also dogs are the best...</p>
                                <a href="/#portfolioSection"><p className='link_text'>Take a look at my work!</p></a>
                                <h3>My Skills</h3>
                                <SkillsList />
                                <PrimaryButton
                                    styles={{ width: '100%', margin: '2rem 0' }}
                                    buttonText='Take a Look At My Work'
                                    buttonLink='#portfolioSection'
                                    // handleClick={removeScroll}
                                />
                            </div>
                        </Grid>
                        <Grid className='d-none d-lg-block' item md={5} lg={6}>
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 25
                                        },
                                        "size": {
                                            "value": 3
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
                        </Grid>
                    </Grid>
                </Fade>
            </Container>
        </div>
    )
}

export default AboutSection;