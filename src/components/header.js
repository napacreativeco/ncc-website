import React from "react"
import { Link } from "gatsby"
import logo from "../images/text-logo-underline--blk.svg"
import Hamburger from './hamburger.js'
import NavigationLinks from './navigation.js'

import Fade from 'react-reveal/Fade';





class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if ( this.state.display === 'none') {
      this.setState({
        display: 'block',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        top: '72px'
      })
    } else {
      this.setState({
        display: 'none',
        boxShadow: 'none'
      })
    }

  }

  render() {
    return (
      <header>
        <div className="row" style={{ boxShadow: this.state.boxShadow }}>
          <div className="cell left">
            <Link to="/" className="logo-container">
              <img src={logo} alt="Napa Creative Company" />
            </Link>
          </div>
          <div className="cell right">
            <div className="main-menu">
              <NavigationLinks />
            </div>
            <div className="hamburger" role="link" tabIndex="0" onClick={ this.handleClick } onKeyDown={ this.handleClick }>
              <div><Hamburger  /></div>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <Fade top>
            <div className="mobile-menu" style={{ display: this.state.display, zIndex: '-1', marginTop: this.state.top }}>
                <NavigationLinks />
            </div>
          </Fade>
        </div>
      </header>
    )
  }

}



export default Header

