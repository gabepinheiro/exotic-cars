import { Button, Logo } from '@/components/ui'
import { ContentContainer } from '@/components/layouts'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <ContentContainer>
        <Logo />
        <div>
          <Button>Sign in</Button>
          <Button variant='outlined'>Sign up</Button>
        </div>
      </ContentContainer>
    </S.Wrapper>
  )
}
