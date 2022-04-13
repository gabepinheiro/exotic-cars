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
        <div>
          <Button>Sign in</Button>
          <Button variant='outlined'>Sign up</Button>
        </div>
      </ContentContainer>
    </S.Wrapper>
  )
}
