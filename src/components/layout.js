/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import GitHub from '../images/github.svg'
import CodePen from '../images/codepen.svg'
import LinkedIn from '../images/linkedin.svg'
import Dribbble from '../images/dribbble.svg'

import config from 'react-reveal/globals';

config({ ssrFadeout: true });


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


const Layout = ({ children }) => {


  return (
    <>

      <ScrollToTopOnMount />

      <Header />

      <div className="page-container">

        <main className="__main">
          {children}
        </main>

        <div className="bottom-line left">
          <ul>
            <li><a href="https://github.com/napacreativeco" title="Github"><img src={GitHub} alt="GitHub" /></a></li>
            <li><a href="https://codepen.io/napacreativeco" title="Codepen"><img src={CodePen} alt="Codepen" /></a></li>
            <li><a href="https://www.linkedin.com/in/jamesadamrogers/" title="LinkedIn"><img src={LinkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://dribbble.com/jamesadamrogers" title="Dribbble"><img src={Dribbble} alt="Dribbble" /></a></li>
          </ul>
        </div>

        <div className="bottom-line right">
         <p>hello@napacreativeco.com</p>
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '20px 40px' }}>
          &copy; {new Date().getFullYear()}, Built using React, Gatsby & Sanity by
          {` `}
          <a href="https://www.napacreativeco.com">Napa Creative Co.</a>
        </footer>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
