import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import Image from 'gatsby-image';
import { Link } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: {eq: $slug} }) {
      title
      description
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
    <Image fluid={ data.sanityProject.mainImage.asset.fluid } alt={ data.sanityProject.title } />
    <h1>{ data.sanityProject.title }</h1>
    <p>{ data.sanityProject.description }</p>
    <Link to="/">Back to home</Link>
  </Layout>
)