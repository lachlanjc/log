import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Box, Card, Heading, Text } from '@hackclub/design-system'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Body from '../components/Body'
import Posts from '../components/Posts'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Container maxWidth={36} p={3}>
          <Header />
          <Bio />
        </Container>
        <Posts>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.day') || node.fields.slug
            return (
              <Card px={4} py={3} bg="white" key={node.fields.slug}>
                <Text f={2} m={0} color="grey" caps>
                  {new Date(title).toLocaleDateString('en-us', {
                    weekday: 'long',
                  })}
                </Text>
                <Heading.h3 f={4} my={1} color="info">
                  <Link to={node.fields.slug}>{title}</Link>
                </Heading.h3>
                <Body f={2} dangerouslySetInnerHTML={{ __html: node.html }} />
              </Card>
            )
          })}
        </Posts>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___day], order: DESC }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            day
          }
        }
      }
    }
  }
`
