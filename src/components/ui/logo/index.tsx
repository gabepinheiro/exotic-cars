import { HtmlHTMLAttributes } from 'react'
import * as S from './styles'

export const Logo = ({ ...props }: HtmlHTMLAttributes<HTMLElement>) => {
  return (
    <S.Wrapper {...props}>
      Exotic
      <span>cars</span>
    </S.Wrapper>
  )
}
