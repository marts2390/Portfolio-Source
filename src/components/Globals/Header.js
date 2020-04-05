import React from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { HamburgerElastic } from 'react-animated-burgers'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const styles = {
  menu: {
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      width: '100%'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      menuOpen: false
    }
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen, isActive: state.isOpen })
  }

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
      isActive: !this.state.isActive
    });
  }


  render() {
    return (
      <div>
        <HamburgerElastic
          isActive={this.state.isActive}
          barColor="#d2d2d2"
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 999
          }}
          onClick={() => this.toggleMenu()} />
        <Menu
          styles={styles.menu}
          isOpen={this.state.menuOpen}
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={(state) => this.handleStateChange(state)}>
          <header className='nav_list'>
            <h4>Home Page</h4>
            <ul>
              <li>
                <Link to="/" onClick={() => this.toggleMenu()}>Home</Link>
              </li>
              <li>
                <Link to="/#aboutSection" onClick={() => this.toggleMenu()}>About</Link>
              </li>
              <li>
                <Link to="/#portfolioSection" onClick={() => this.toggleMenu()}>Portfolio</Link>
              </li>
              <li>
                <Link to="/#contactSection" Click={() => this.toggleMenu()}>Contact</Link>
              </li>
            </ul>
            <h4>Apps</h4>
            <ul className="app_list">
              <li>
                <NavLink to="/remotejobapp" onClick={() => this.toggleMenu()} exact={true}>Remote Job Board</NavLink>
              </li>
              <li>
                <NavLink to="/indecisionapp" onClick={() => this.toggleMenu()} exact={true}>Indecision App</NavLink>
              </li>
              <li>
                <NavLink to="/taskcardapp" onClick={() => this.toggleMenu()} exact={true}>Task Card App</NavLink>
              </li>
            </ul>

          </header>
        </Menu>
      </div>
    )
  }
};

export default Header;
