import { ThemeProvider } from 'styled-components'
import { App } from '@/app'
import { GlobalStyles, theme } from '@/styles'

import { BrowserRouter } from 'react-router-dom'

export function Root () {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  )
}
