import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Container, Card, Heading, Text, Box } from '@hackclub/design-system'
import get from 'lodash/get'

import Header from '../components/Header'
import Bio from '../components/Bio'
import Day from '../components/Day'
import Body from '../components/Body'

export default ({ data: { markdownRemark } }) => {
  const { frontmatter: { day }, html } = markdownRemark
  return (
    <Container maxWidth={36} p={3}>
      <Helmet title={`${day} – @lachlanjc`} />
      <Header />
      <Card bg="white" boxShadowSize="md" p={4} mx={[-3, -4]} my={4}>
        <Day children={day} />
        <Heading.h1 color="primary" f={5} m={0}>
          {day}
        </Heading.h1>
        <Body mt={2} dangerouslySetInnerHTML={{ __html: html }} />
      </Card>
      <Bio />
    </Container>
  )
}

export const pageQuery = graphql`
  query DayBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        day
      }
    }
  }
`
