import { Header, ContentContainer } from '@/components'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation()
  const isCarDetailsPage = pathname === '/car-details'

  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer isCarDetailsPage={isCarDetailsPage}>
        <ContentContainer>
          {children}
        </ContentContainer>
      </S.MainContainer>
    </S.Wrapper>
  )
}
