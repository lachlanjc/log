import React from 'react'
import ThemeProvider from '../theme'

const Template = ({ children, ...props }) => (
  <ThemeProvider {...props} children={children()} />
)

export default Template
