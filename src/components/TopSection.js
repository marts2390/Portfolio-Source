import React from 'react'
import Typist from 'react-typist';
import AnimatedBg from './Canvas';
import { PrimaryButton } from './buttons/Buttons';
import { Fade } from 'react-reveal';

const TopSection = (props) => {

    // const handleButtonClick = () => {
    //     const opacity = 1;
    //     props.setOpacity(opacity)
    // };

    return (
        <div className='top-section' id="home">
            <div className='homepage_title'>
                <div className='intro-text'>
                    <Typist cursor={{ element: '' }}>
                        <h1>Hey There...</h1>
                        <Typist.Delay ms={500} />
                        <h1>My Name is Chris...</h1>
                        <Typist.Delay ms={500} />
                        <h1>And I'm a Front End Developer...</h1>
                    </Typist>
                    <Fade delay={6500} timeout={500}>
                        <PrimaryButton styles={{margin: '2rem 0'}} buttonText='Come On In' buttonLink='#aboutSection' />
                    </Fade>
                </div>
            </div>
            <AnimatedBg />
        </div>
    )
};

export default TopSection;