import React from 'react'
import { useStaticQuery, graphql } from "gatsby"


export default function NavigationLinks() {
  const data = useStaticQuery(graphql`
    query HeadingQueryTwo {
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
  `)

   return (
      <div>
        <ul className="main-menu">
          {data.allSanityNavigation.edges.map( ({ node: nav }) => (
            <li><a href={ nav.linkUrl } title={ nav.linkText }>{ nav.linkText }</a></li>
          ) )}
        </ul>
      </div>
   )
}









