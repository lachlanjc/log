import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'
import get from 'lodash/get'

import Header from '../components/Header'
import Bio from '../components/Bio'
import Body from '../components/Body'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Container maxWidth={36} p={3}>
      <Helmet title={`${post.frontmatter.day} | ${siteTitle}`} />
      <Header />
      <Card bg="white" boxShadowSize="md" p={4} mx={[-3, -4]} my={4}>
        <Text f={2} m={0} color="grey" caps>
          {new Date(post.frontmatter.day).toLocaleDateString('en-us', {
            weekday: 'long',
          })}
        </Text>
        <Heading.h1 color="primary" f={5} m={0}>
          {post.frontmatter.day}
        </Heading.h1>
        <Body mt={2} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Card>
      <Bio />
    </Container>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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
