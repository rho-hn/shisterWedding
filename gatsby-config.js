require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Manu & Aman's Wedding`,
    description: `Manu & AmAN Wedding`,
    author: `rho-hn`
  },
  plugins: [
    { resolve: `gatsby-plugin-emotion` },
    'gatsby-plugin-use-query-params',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}
