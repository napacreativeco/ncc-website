import React from "react"
import { Link } from "gatsby"
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
        top: '0px',
        burger: 'none',
        openClass: 'open-faced',
        padding: '6px'
      })
    } else {
      this.setState({
        display: 'none',
        boxShadow: 'none',
        burger: 'block',
        openClass: '',
        padding: '0px'
      })
    }



  }

  render() {
    return (
      <header>

        <div className="row top">
          <div className="cell left">
            <h4>GRAPHIC DESIGN</h4>
          </div>
          <div className="cell center">
            <Link to="/" className="logo-container">
              <h2>NAPA CREATIVE CO.</h2>
            </Link>
          </div>
          <div className="cell right">
            <h4>WEB DEVELOPMENT</h4>
          </div>
        </div>


        <div className="row menu" style={{ boxShadow: this.state.boxShadow }}>
  
            <div className="main-menu"><NavigationLinks /></div>

            <div className="hamburger" role="link" tabIndex="0" onClick={ this.handleClick } onKeyDown={ this.handleClick }>
              <div style={{ position: 'relative', padding: this.state.padding }}>
                <Hamburger openClassParent={this.state.openClass} />
              </div>
            </div>

        </div>

        <div id="mobile-menu" style={{ position: 'relative' }}>
          <Fade top duration={300}>
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

