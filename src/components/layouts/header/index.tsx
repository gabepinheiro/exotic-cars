import { useNavigate } from 'react-router-dom'
import {
  ContentContainer,
  Button,
  Logo,
  SearchBar,
} from '@/components'

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
        <SearchBar />
        <S.ButtonsWrapper>
          <Button>Sign in</Button>
          <Button variant='outlined'>Sign up</Button>
        </S.ButtonsWrapper>
      </ContentContainer>
    </S.Wrapper>
  )
}
