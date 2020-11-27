import React from "react"
import { Link } from "gatsby"
import logo from "../images/text-logo-underline--blk.svg"
import Hamburger from './hamburger.js'
import NavigationLinks from './navigation.js'





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
        display: 'block'
      })
    } else {
      this.setState({
        display: 'none'
      })
    }

  }

  render() {
    return (
      <header>
        <div className="row">
          <div className="cell left">
            <Link to="/" className="logo-container">
              <img src={logo} alt="Napa Creative Company" />
            </Link>
          </div>
          <div className="cell right">
            <div className="main-menu">
              <NavigationLinks />
            </div>
            <div className="hamburger" onClick={ this.handleClick }>
              <Hamburger  />
            </div>
          </div>
        </div>
        <div className="mobile-menu" style={{ display: this.state.display }}>
            
            <span onClick={ () => { this.setState({ display: 'none' }) }}>close</span>
        </div>
      </header>
    )
  }

}



export default Header

