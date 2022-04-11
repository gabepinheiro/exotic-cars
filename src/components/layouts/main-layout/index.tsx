import { Header, ContentContainer } from '@/components'
import { ReactNode } from 'react'

import * as S from './styles'

type MainLayoutProps = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </S.MainContainer>
    </S.Wrapper>
  )
}
