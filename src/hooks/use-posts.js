import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  //here the GQL is template literal unlike gatsby-node.js
  const data = useStaticQuery(graphql`
  query {
    allMdx {
      nodes {
       frontmatter {
        title,
        slug,
        author,
        image {
          sharp: childImageSharp {
            fluid (
              maxWidth: 100
              maxHeight: 100
              duotone: { shadow: "#663399", highlight: "#ddbbff"}
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
       excerpt
      }
    }
  }
  `);


  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    excerpt: post.excerpt,
    image: post.frontmatter.image,
  }));
}

export default usePosts;