import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ReadLink from '../components/read-link'

export const query = graphql`
query($slug: String!) {
  mdx(frontmatter: { slug: {eq: $slug}}) {
    frontmatter{
      title
      author
    }
    body
  }
}
`
//data below comes from the resut of the query
//we are aliasing mdx topost
const PostTemplate = ({ data: {mdx : post} }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >Posted by {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate;