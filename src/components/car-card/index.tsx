import { Car } from '@/resources/types'
import { getCurrencyFormatted } from '@/utils/getCurrecyFormatted'

import * as S from './styles'

type CarCardProps = Omit<Car, 'id' | 'colors'>

export const CarCard = (car: CarCardProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.BrandModelWrapper>
          <S.Brand>{car.brand}</S.Brand>
          <S.Model>{car.model}</S.Model>
        </S.BrandModelWrapper>
        <S.DotsWrapper>
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.DotsWrapper>
      </S.Header>
      <S.ThumbWrapper>
        <S.Thumb src={car.thumb} alt={`${car.brand} ${car.model}`} />
      </S.ThumbWrapper>
      <S.Rent>
        {getCurrencyFormatted(car.rentAmount)}
        <span>/{car.per}</span>
      </S.Rent>
    </S.Wrapper>
  )
}
