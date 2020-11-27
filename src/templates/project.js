import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import Image from 'gatsby-image';
import { Link } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: {eq: $slug} }) {
      title
      _rawProjectBody
      categories {
        title
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
`;

export default ({ data }) => (
  
 
  <Layout>
    <div class="project-container">
      <div className="title-card">
        <div className="cell left">
          <Image fluid={ data.sanityProject.mainImage.asset.fluid } alt={ data.sanityProject.title } />
        </div>
        <div className="cell right">
          <h1>{ data.sanityProject.title }</h1>
          <ul className="categories">
              { data.sanityProject.categories.map((category) => (
                <li> { category.title } </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="project-body">
        <BlockContent blocks={ data.sanityProject._rawProjectBody } />
      </div>
    </div>
    <div className="back-to-home"><Link to="/">Back to home</Link></div>
  </Layout>

)