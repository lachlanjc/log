import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import Link from 'gatsby-link'

const Header = props => (
  <Heading.h1 my={3} f={5} {...props}>
    <Link to="/">
      <Text.span color="slate" style={{ fontWeight: 200 }}>
        @lachlanjc/
      </Text.span>
      <Text.span color="primary" style={{ fontWeight: 800 }}>
        log
      </Text.span>
    </Link>
  </Heading.h1>
)

export default Header
