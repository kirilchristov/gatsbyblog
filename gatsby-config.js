module.exports={
  siteMetadata: {
    title: 'kirilchristov.com',
    description: 'Kiril Christov - a Software Developer from Los Angeles',
  },
  plugins: [
    'gatsby-plugin-emotion', 
    'gatsby-plugin-react-helmet', 
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-mdx',
    options:{
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js'),
      },
      gatsbyRemarkPlugins: [{
        resolve: 'gatsby-remark-images'
      }]
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'posts',
      path: "posts",
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: 'images',
    }
  },
  {
    resolve: 'gatsby-source-instagram',
    options: {
      username: 'karlsonx'
    },
  },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyzer', //its like webpack config - dont sweat too much on it
    options: {
      production: true,
      disable: !process.env.ANALYZE_BUNDLE_SIZE, //if there is .env it will work
      generateStatsFile: true,
      analyzerMode: 'static', 
    }
  }
  ],
}