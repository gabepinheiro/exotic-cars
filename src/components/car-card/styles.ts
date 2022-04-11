import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    width: 28.7rem;
    height: 22.3rem;
    background-color: ${theme.colors.shape};
    border-radius: 20px;
    padding: 2.3rem 1.7rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;

    transition: all 0.3s ease-in;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 5px 10px rgba(0,0,0, 0.1);
    }
  `}
  `

export const Brand = styled.h3`
  margin-bottom: 0.4rem;
`

export const Model = styled.p`
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`

export const ThumbWrapper = styled.div`
  height: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Thumb = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  margin-bottom: 0.3rem;
`

export const Rent = styled.p`
  align-self: flex-end;
  font-size: 2.4rem;
  font-weight: bold;

  sup {
    font-size: 1.4rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`
