import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import postPreview from '../components/post-preview'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview';
import Hero from '../components/hero'
import Insta from '../components/insta'




export default () => {
  const posts = usePosts();

console.log('Line 12 index.js',posts)
  return (
    <>
      <Hero />
      <Layout>
        <h1>Hello Frontend Masters and Kiro!</h1>
        <p>Some paragraph</p>
        <Link to="/about">Go to About &rarr;</Link>
        <h1>Read my blog</h1>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post}/>
        ))}
        <Insta />
      </Layout>
    </>
  )
}