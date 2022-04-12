import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from '@/root'
import { makeServer } from '@/mirage'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' })
}

const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
