module.exports = {
  siteMetadata: {
    title: 'Daily Log',
    author: 'Lachlan Campbell',
    description: 'A daily log of my work.',
    siteUrl: 'https://log.lachlanjc.me'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/days`,
        name: 'days'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 512
            }
          },
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
