import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'
import ArrowRight from "../images/arrow-right-fill.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Zoom from 'react-reveal/Zoom'



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


const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Our Work" />

    {/* Post Loop */}  
    <div className="work-loop">
      <h2>Our work <span>Recent projects</span></h2>
      <ul className="container">
        { data.allSanityProject.edges.map( ({ node: project }) => (

            <li key={project.slug.current } className="item">
              <Zoom cascade>
              <BackgroundImage fluid={ project.mainImage.asset.fluid } className="image">
                <div className="info-overlay">
                    <h3><Link to={ project.slug.current}>{ project.title }</Link></h3>
                    <p>{ project.shortDescription }</p>
                    <Link to={ '/' + project.slug.current } className="link">More info</Link>
                    <Link to={ '/' + project.slug.current } className="arrow-right"><img src={ArrowRight} alt="More info" /></Link>
                </div>
              </BackgroundImage>
              </Zoom>
            </li>

         

        ))}
      </ul>
    </div>

    <div className="back-to-home"><Link to="/">Back to home</Link></div>

  </Layout>
)

export default WorkPage
