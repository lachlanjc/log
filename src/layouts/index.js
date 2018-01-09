import React from 'react'
import Link from 'gatsby-link'
import { ThemeProvider, Container, Heading } from '@hackclub/design-system'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const header =
      location.pathname === rootPath ? (
        <Heading.h1 mt={0} mb={3} f={[4, 5]}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            @lachlanjc log
          </Link>
        </Heading.h1>
      ) : (
        <Heading.h1 mt={0} mb={3} f={[3, 4]}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            @lachlanjc log
          </Link>
        </Heading.h1>
      )

    return (
      <ThemeProvider>
        <Container maxWidth={36} p={3}>
          {header}
          {children()}
        </Container>
      </ThemeProvider>
    )
  }
}

export default Template
