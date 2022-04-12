import { ButtonLink } from '@/components'
import * as S from './styles'

function CarDetailsPage () {
  return (
    <S.Wrapper>
      <h2>Car Details Page</h2>
      <ButtonLink to='#' reverse='true' variant='outlined'>
        Back to catalog
      </ButtonLink>
      <ButtonLink to='#'>
        Book now
      </ButtonLink>
    </S.Wrapper>
  )
}

export default CarDetailsPage
