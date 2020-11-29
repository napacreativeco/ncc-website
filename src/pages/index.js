import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'
import Hero from '../components/hero.js'
import ViewMore from "../images/view-more-fill.svg"

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

<<<<<<< HEAD

      <div className="home-loop">
        <div className="title">
          <h2>Recent work <a href="/work" title="Our Work">browse all</a></h2>
        </div>

        <ul className="hs full no-scrollbar">
          {data.allSanityProject.edges.map(({ node: project }) => (

            <li key={project.slug.current} className="item">
              <Fade right cascade>
                <BackgroundImage fluid={project.mainImage.asset.fluid} className="image"></BackgroundImage>
              <div className="info">
                <h3><Link to={project.slug.current}>{project.title}</Link></h3>
                <p>{project.shortDescription}</p>
                <Link to={project.slug.current} className="link">
                  <img src={ViewMore} alt="View more" style={{ width: '25px', height: '25px' }} />
                </Link>
              </div>
              </Fade>
            </li>

          ))}
        </ul>
      </div>

=======
>>>>>>> c0114a5235ba6b19cb8a78925ac01f7172310252
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
