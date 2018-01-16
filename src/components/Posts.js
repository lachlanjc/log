import React from 'react'
import { Box } from '@hackclub/design-system'

const Posts = Box.withComponent('main').extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-gap: 1rem;
  max-width: 48rem;
  margin: 1rem auto;
  @media screen and (max-width:32em) {
    > div {
      border-left: 0;
      border-right: 0;
      border-radius: 0;
    }
  }
  ${props => props.theme.mediaQueries[1]} {
    grid-gap: 2rem;
  }
`

export default Posts
