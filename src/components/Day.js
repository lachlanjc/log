import React from 'react'
import { Text } from '@hackclub/design-system'

const getDay = day => {
  const dt = new Date(day)
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleDateString('en-us', { weekday: 'long' })
}

const Day = ({ children, ...props }) => (
  <Text f={2} m={0} color="grey" caps {...props}>
    {getDay(children)}
  </Text>
)

export default Day
