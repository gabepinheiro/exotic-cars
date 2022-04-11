import { Button, Logo } from '@/components/ui'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <Logo />
        <div>
          <Button>Sign in</Button>
          <Button variant='outlined'>Sign up</Button>
        </div>
      </S.ContentContainer>
    </S.Wrapper>
  )
}
