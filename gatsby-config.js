module.exports = {
  siteMetadata: {
    title: `Napa Creative Co`,
    description: `Quality Web and Graphic Design for businesses of all types`,
    author: `@napacreativeco`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `3vg4y9tf`,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token: 'skSVAlv47A9r7kqOILwgFqUx8qiS02he6T3UXzAcqhgZ4kAorZQmSMppyvaapd6rRXfNq044OXPzhfg4Cucd3BQwsTLbQKcIICTk1QxWYQzoruFWDauB0JejoI56XmQD8InfiSgbJIABOyrVIFu1dFNBHW6RDNu8NqPh2v00C7b9EYAXcX9P'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
