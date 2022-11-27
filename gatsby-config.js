/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        enable: process.env.NODE_ENV === 'production',
      },
    },
    'gatsby-plugin-typescript',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 80,
        }
      },
      `gatsby-plugin-react-head`,
    // {
    //   resolve: 'gatsby-plugin-zopfli',
    //   options: {
    //     extensions: ['css', 'html', 'js', 'svg']
    //   }
    // },
  ],
}
