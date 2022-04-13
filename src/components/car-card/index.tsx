import { Car } from '@/resources/types'
import * as S from './styles'

type CarCardProps = Omit<Car, 'id' | 'colors'>

export const CarCard = (car: CarCardProps) => {
  return (
    <S.Wrapper>
      <S.Brand>{car.brand}</S.Brand>
      <S.Model>{car.model}</S.Model>
      <S.ThumbWrapper>
        <S.Thumb src={car.thumb} alt={`${car.brand} ${car.model}`} />
      </S.ThumbWrapper>
      <S.Rent>
        <sup>$</sup>
        {car.rentAmount}
        <span>/{car.per}</span>
      </S.Rent>
    </S.Wrapper>
  )
}
