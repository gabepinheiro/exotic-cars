import { ButtonLink } from '@/components'
import * as S from './styles'

function CarDetailsPage () {
  return (
    <S.Wrapper>
      <S.CarInfo>
        <S.BrandImage src='assets/ferrari/brand-img.png' alt='Ferrari' />
        <S.BrandModelRentWrapper>
          <S.BrandModel>Ferrari Italia</S.BrandModel>
          <S.Rent>$725/day</S.Rent>
        </S.BrandModelRentWrapper>
      </S.CarInfo>
      <S.CarImageWrapper>
        <ButtonLink to='#' reverse='true' variant='outlined'>
          Back to catalog
        </ButtonLink>
        <S.CarImage src='assets/ferrari/gray-color.png' />
        <S.Color>
          <span>03</span>
          <span className='colorName'>Gray</span>
        </S.Color>
      </S.CarImageWrapper>
      <S.Center>
        <ButtonLink to='#'>Book now</ButtonLink>
      </S.Center>
    </S.Wrapper>
  )
}

export default CarDetailsPage
