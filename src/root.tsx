import { ThemeProvider } from 'styled-components'
import { App } from '@/app'
import { GlobalStyles, theme } from '@/styles'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}
