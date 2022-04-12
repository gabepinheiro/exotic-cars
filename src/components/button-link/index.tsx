import { ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import * as S from './styles'

export type ButtonLinkProps = {
  children: ReactNode | ReactNode[]
  color?: 'black'
  variant?: 'outlined' | 'contained'
  reverse?: 'true' | 'false'
} & LinkProps

export const ButtonLink = ({
  children,
  color = 'black',
  variant = 'contained',
  reverse = 'false',
  ...props
}: ButtonLinkProps) => {
  return (
    <S.Wrapper
      color={color}
      variant={variant}
      reverse={reverse}
      {...props}
    >
      {children}
      {reverse === 'true' ? <BsArrowLeft /> : <BsArrowRight />}
    </S.Wrapper>
  )
}
