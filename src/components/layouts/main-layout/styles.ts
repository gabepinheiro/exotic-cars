import styled, { css } from 'styled-components'

type Props = {
  isCarDetailsPage: boolean
}

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.main<Props>`
  flex: 1;

  ${({ isCarDetailsPage }) => css`
    ${isCarDetailsPage && css`
      background: linear-gradient(125deg, #FFFFFF 0%, #D8D7D7 100%);
    `}
  `}
`
