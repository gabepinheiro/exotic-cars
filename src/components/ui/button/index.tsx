import styled, { css } from 'styled-components'

type Color = 'primary'
type Variant = 'text' | 'outlined' | 'contained'

type ButtonProps = {
  color?: Color
  variant?: Variant
}

const Modifiers = {
  text: () => css`
    background-color: transparent;
  `,

  outlined: () => css`
    ${({ theme }) => css`
      border: 2px solid ${theme.colors.primary};
    `}
  `,

  contained: () => css`
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: #fff;
    `}
  `,
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = 'text', color = 'primary' }) => css`
    border:0;
    border-radius: 1.2rem;
    background-color: transparent;
    color: ${theme.colors[color]};
    height: 3.6rem;
    padding: 0 1.6rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    ${!!variant && Modifiers[variant]};

    :hover {
      opacity: 0.7;
    }
  `}
`
