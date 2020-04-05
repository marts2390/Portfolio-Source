import React from 'react'
import Header from './Globals/Header';
import TopSection from './TopSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import Contact from './Contact';
import ThemeProvider from "./ThemeProvider";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import '../styles/PortfolioStyles/PortfolioStyles.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpacity: 0,
        }
    }

    componentDidMount = () => {
        this.targetElement = document.querySelector('body'); 
        disableBodyScroll(this.targetElement);
    }

    componentWillUnmount = () => {
        clearAllBodyScrollLocks();
    }

    setOpacity = (opacity) => {
        setTimeout(() => (
            this.setState({ navOpacity: opacity })
        ), 1000);
    }
    render() {
        return (
            <ThemeProvider>
                <div className='homepage' id='homePage'>
                    <Header showNav={this.state.navOpacity} />
                    <TopSection setOpacity={this.setOpacity} />
                    <AboutSection />
                    <PortfolioSection />
                    <Contact />
                </div>
            </ThemeProvider>
        )
    }
};

export default Home;