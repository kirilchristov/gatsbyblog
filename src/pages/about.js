/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'

function about() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>This is my personal website</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
  )
}

export default about;