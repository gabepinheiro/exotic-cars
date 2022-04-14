import styled, { css } from 'styled-components'

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}

  height: 100%;
  margin: 0 auto;
  padding: 0 3.2rem;
`
