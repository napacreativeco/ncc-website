import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import logo from "../images/text-logo-underline--blk.svg"
import Hamburger from './hamburger.js'




function Header({ data }) {

  function handleClick(e) {
    e.preventDefault();
    console.log('working');

  }


  return (

    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allSanityNavigation(sort: {fields: priority}) {
            edges {
              node {
                linkUrl
                linkText
                priority
              }
            }
          }
        }
      `}
        render={data => (

        <header>
          <div className="row">
            <div className="cell left">
              <Link to="/" className="logo-container">
                <img src={logo} alt="Napa Creative Company" />
              </Link>
            </div>
            <div className="cell right">
              <ul className="main-menu">
              {data.allSanityNavigation.edges.map(({ node: nav }) => (
                <li><a href={ nav.linkUrl } title={ nav.linkText }>{ nav.linkText }</a></li>
              ))}
              </ul>
              <div className="hamburger" onClick={handleClick}>
                <Hamburger />
              </div>
            </div>
          </div>
          <div className="mobile-menu" id="mobile-menu">
            <ul>
              {data.allSanityNavigation.edges.map(({ node: nav }) => (
                <li><a href={ nav.linkUrl } title={ nav.linkText }>{ nav.linkText }</a></li>
              ))}
            </ul>
          </div>
        </header>

        )}
      />
  )
}


