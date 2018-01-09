import React from 'react'
import Helmet from 'react-helmet'
import { Heading, Text } from '@hackclub/design-system'
import get from 'lodash/get'

import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.day} | ${siteTitle}`} />
        <Heading.h1>{post.frontmatter.day}</Heading.h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Bio />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        day
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        day
      }
    }
  }
`
