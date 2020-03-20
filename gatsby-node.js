//We grab some stuff here, don't think about it

exports.createPages = async ({ actions, graphql, reporter }) => {
//here the GQL is a function unlike use-posts.js
//This is a NODE interface, different from REACT interface
  const result = await graphql(`
    query {
        allMdx {
          nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if(result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug
      },
    });
  });
}