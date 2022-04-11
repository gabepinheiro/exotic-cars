import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 8.5rem;
    box-shadow: 0px 10px 30px #0000001A;
  `}
`
export const ContentContainer = styled.div`
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
