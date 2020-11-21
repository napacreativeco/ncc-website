import React from "react"
import { graphql } from 'gatsby'
// import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'

import Layout from "../components/layout"
import SEO from "../components/seo"





// GraphQL Query
export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          categories {
            title
          }
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


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    {/* Hero */}
    <div className="hero">
      <div className="row">
        <p className="hero-subtitle">welcome</p>
        <h1 className="hero-title">We Are An Independent Design Agency Focused On Web & Graphic Design Solutions for Brands and Companies that strive to Stand Out</h1>
      </div>
    </div>

    {/* Post Loop */}  
    <div className="homepage-loop">
      <ul className="container">
        { data.allSanityProject.edges.map( ({ node: project }) => (

          <li key={project.slug.current } className="item">
            <BackgroundImage fluid={ project.mainImage.asset.fluid } className="image"></BackgroundImage>
              <div className="info">
                <h2><Link to={ project.slug.current}>{ project.title }</Link></h2>
                <p>{ project.description }</p>
                <Link to={ project.slug.current } className="link">View more</Link>
              </div>
          </li>

        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage
