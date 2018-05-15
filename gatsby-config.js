module.exports = {
  siteMetadata: {
    title: 'Dan Beerman - Developer // Front End Engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-29961590-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
  },
  ]
};
