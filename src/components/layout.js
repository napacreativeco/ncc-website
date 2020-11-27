/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {


  return (
    <>
      {/* Navigation */}
      <Header />

      <div className="page-container">
        {/* Page Content */}
        <main>
          {children}
        </main>

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
