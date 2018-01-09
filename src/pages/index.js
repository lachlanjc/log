import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Box, Heading, Text } from '@hackclub/design-system'
import Bio from '../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.day') || node.fields.slug
          return (
            <Box my={[3, 4]} key={node.fields.slug}>
              <Heading.h3 f={[4, 5]} mb={2} color="info">
                <Link to={node.fields.slug}>{title}</Link>
              </Heading.h3>
              <Text f={2} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Box>
          )
        })}
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
          excerpt
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
