import React from "react"
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Link } from "gatsby"
import '../css/app.css'
import Hero from '../components/hero.js'
import Newsletter from '../components/newsletter.js'
import ViewMore from "../images/view-more-fill.svg"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Fade from 'react-reveal/Fade';



// GraphQL Query
export const query = graphql`
  {
    allSanityProject(filter: {collections: {elemMatch: {slug: {current: {eq: "spotlight"}}}}}) {
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

      <div class="preloader"><img src="/332.gif" alt="Just a sec..." style={{ width: '100px'}} /></div>

      <Hero />

      <Newsletter />


      <div className="home-loop-title">
        <Fade bottom delay={200}><h2>Recent work <a href="/work" title="Our Work">browse all</a></h2></Fade>
      </div>
      <div className="home-loop">
        <ul className="row">
          {data.allSanityProject.edges.map(({ node: project }) => (

            
              <li key={project.title} className="cell">
                <Fade delay={200}>
                  <BackgroundImage fluid={project.mainImage.asset.fluid} className="image"></BackgroundImage>
                </Fade>  
                <Fade bottom delay={500}>
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

      <div className="homepage-services">
        <div className="cell">
            <h3>So what do we do?</h3>
            <p>We utilize the latest tools to create pixel perfect Designs, Logos, Layouts and Promotional materials that look great on all formats</p>
            <Link to="/work"><button>View work</button></Link>
        </div>
        <div className="cell">
            <h3>How can we get started?</h3>
            <p>Feeling like you might want to start a new project? Go ahead and contact us at the link below</p>
            <Link to="/contact"><button>Reach out</button></Link>
        </div>
      </div>

    </Layout>
  )
}

export default IndexPage
