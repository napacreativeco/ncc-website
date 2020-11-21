import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/text-logo-underline--blk.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="row">
        <Link to="/" style={{ width: '200px', padding: '0px' }}>
          <img src={logo} alt="ok" style={{ width: '100%', marginBottom: '0' }} />
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
