import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'
import Hero from '../components/hero.js'
import ViewMore from "../images/view-more-fill.svg"
import ClientsArea from '../components/clientsArea.js'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Fade from 'react-reveal/Fade';



// GraphQL Query
export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          categories {
            title
          }
          shortDescription
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;


function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />


      <Hero />

      <div className="homepage-services">
        <div className="cell">
          <Fade cascade>
            <h3>So what do we do?</h3>
            <p>We utilize the latest tools to create pixel perfect Designs, Logos, Layouts and Promotional materials that look great on all formats</p>
          </Fade>
        </div>
        <div className="cell">
          <Fade cascade>
            <h3>How can we get started?</h3>
            <p>Feeling like you might want to start a new project? Go ahead and contact us at the link below</p>
            <Link to="/contact"><button>Reach out</button></Link>
          </Fade>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage
