import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'
import Hero from '../components/hero.js'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Flip from 'react-reveal/Flip';

// GraphQL Query
export const query = graphql`
  {
    allSanityProject(filter: {collections: {elemMatch: {title: {eq: "Spotlight"}}}}) {
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


      <div className="home-loop">
        <h2>Recent work</h2>
        <ul className="hs full no-scrollbar">
          {data.allSanityProject.edges.map(({ node: project }) => (

            <li key={project.slug.current} className="item">
              <BackgroundImage fluid={project.mainImage.asset.fluid} className="image"></BackgroundImage>
              <div className="info">
                <Flip top cascade><h3><Link to={project.slug.current}>{project.title}</Link></h3></Flip>
                <p>{project.shortDescription}</p>
                <Link to={project.slug.current} className="link">More info</Link>
              </div>
            </li>

          ))}
        </ul>
      </div>

      <div className="homepage-services">
        <div className="cell">
          <h3>So what do we do?</h3>
          <p>We utilize the latest tools to create pixel perfect Designs, Logos, Layouts and Promotional materials that look great on all formats</p>
        </div>
        <div className="cell">
          <h3>How can we get started?</h3>
          <p>Feeling like you might want to start a new project? Go ahead and contact us at the link below</p>
          <button>Reach out</button>
        </div>
      </div>

      <div class="marquee">

      </div>

    </Layout>
  )
}

export default IndexPage
