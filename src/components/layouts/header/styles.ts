import styled, { css } from 'styled-components'
import { ContentContainer } from '@/components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 8.5rem;
    box-shadow: 0px 10px 30px #0000001A;
    position: relative;
    z-index: 1;

    ${ContentContainer} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`
