import React from 'react'
import { Box } from '@hackclub/design-system'

const Body = Box.withComponent('article').extend`
  font-family: ${props => props.theme.mono};
  ul, ol {
    padding-left: 0;
  }
`

export default Box
