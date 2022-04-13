import { useNavigate } from 'react-router-dom'
import { Button, Logo } from '@/components/ui'
import { ContentContainer } from '@/components/layouts'
import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  return (
    <S.Wrapper>
      <ContentContainer>
        <Logo onClick={handleNavigateHome} />
        <S.ButtonsWrapper>
          <Button>Sign in</Button>
          <Button variant='outlined'>Sign up</Button>
        </S.ButtonsWrapper>
      </ContentContainer>
    </S.Wrapper>
  )
}
