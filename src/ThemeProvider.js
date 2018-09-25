import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  color: 'rgb(82, 199, 108)'
}

export default ({ children }) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>)
