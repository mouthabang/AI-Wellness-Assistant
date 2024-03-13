/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AIFinancialAwareness`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-env-variables",
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};