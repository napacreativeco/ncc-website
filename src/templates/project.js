import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import { Link } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import Image from 'gatsby-image'

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: {eq: $slug} }) {
      title
      _rawProjectBody
      categories {
        title
      }
      projGallery {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  
 
  <Layout>
    <div class="project-container">
      <div className="intro">
        <h1>{ data.sanityProject.title }</h1>
        <ul className="categories" style={{ listStyle: 'none' }}>
            { data.sanityProject.categories.map((category) => (
              <li> { category.title } </li>
            ))}
        </ul>
      </div>
      <div className="project-body">
        <BlockContent blocks={ data.sanityProject._rawProjectBody } />
        { data.sanityProject.projGallery.map((gallery) => (
              <Image fluid={gallery.asset.fluid } />
        ))}
      </div>
    </div>
    <div className="back-to-home"><Link to="/">Back to home</Link></div>
  </Layout>

)