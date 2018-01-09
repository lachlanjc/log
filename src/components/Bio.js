import React from 'react'
import { Flex, Avatar, Text, Link } from '@hackclub/design-system'

const Bio = () => (
  <Flex alignItems="center" my={2}>
    <Avatar
      src="//lachlanjc.me/static/portrait-96.jpg"
      alt="Lachlan Campbell"
      size="48px"
      mr={3}
      style={{ flexShrink: 'none' }}
    />
    <Text f={2}>
      A log post by <strong>Lachlan Campbell</strong> who lives and works in San
      Francisco building useful things.{' '}
      <Link href="https://twitter.com/lachlanjc">Follow them on Twitter</Link>
    </Text>
  </Flex>
)

export default Bio
