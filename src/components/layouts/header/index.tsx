import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  ContentContainer,
  Button,
  Logo,
  SearchBar,
} from '@/components'

import { AiOutlineMenu as MenuIcon } from 'react-icons/ai'
import { GrClose as CloseIcon } from 'react-icons/gr'

import * as S from './styles'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  const handleToggleOpenMenu = () => {
    setIsOpenMenu(state => !state)
  }

  return (
    <S.Wrapper>
      <ContentContainer>
        <S.Mobile>
          <MenuIcon size={24} onClick={handleToggleOpenMenu} />
        </S.Mobile>
        <S.LogoWrapper>
          <Logo onClick={handleNavigateHome} />
        </S.LogoWrapper>
        <S.Desktop>
          <SearchBar />
        </S.Desktop>
        <S.Desktop>
          <S.ButtonsWrapper>
            <Button>Sign in</Button>
            <Button variant='outlined'>Sign up</Button>
          </S.ButtonsWrapper>
        </S.Desktop>

        <S.Mobile>
          <S.MenuFull aria-hidden={!isOpenMenu} isOpen={isOpenMenu}>
            <S.CloseIconWrapper onClick={handleToggleOpenMenu}>
              <CloseIcon size={24} />
            </S.CloseIconWrapper>

            <SearchBar />

            <S.ButtonsWrapper>
              <Button>Sign in</Button>
              <Button variant='outlined'>Sign up</Button>
            </S.ButtonsWrapper>
          </S.MenuFull>
        </S.Mobile>
      </ContentContainer>
    </S.Wrapper>
  )
}
