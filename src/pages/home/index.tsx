import { CarCard } from '@/components/car-card'
import { cars as DUMMY_CARS } from '@/resources'

import * as S from './styles'

function HomePage () {
  return (
    <S.Wrapper>
      {DUMMY_CARS.map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </S.Wrapper>
  )
}

export default HomePage
