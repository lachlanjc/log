import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Container, Box, Card, Heading, Text } from '@hackclub/design-system'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Body from '../components/Body'
import Posts from '../components/Posts'

const getDay = day => {
  const dt = new Date(day)
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleDateString('en-us', { weekday: 'long' })
}

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <div>
    <Helmet title="@lachlanjc/log" />
    <Container maxWidth={36} p={3}>
      <Header />
      <Bio />
    </Container>
    <Posts>
      {edges.map(({ node: { html, frontmatter: { day } } }) => (
        <Card px={4} py={3} bg="white" boxShadowSize="sm" key={day}>
          <Text f={2} m={0} color="grey" caps>
            {getDay(day)}
          </Text>
          <Heading.h3 f={4} my={1} color="info">
            <Link to={`/${day}`}>{day}</Link>
          </Heading.h3>
          <Body f={2} dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
      ))}
    </Posts>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
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
