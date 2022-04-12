import { ButtonHTMLAttributes } from 'react'
import { ReactComponent as ArrowTopIcon } from './arrow-top.svg'
import * as S from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const TopButton = ({ ...props }: Props) => {
  return (
    <S.Wrapper {...props}>
      <ArrowTopIcon />
    </S.Wrapper>
  )
}
