import styled, { css } from 'styled-components'

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
  `}

  width: 100%;
  height: 100%;
  margin: 0 auto;
`
