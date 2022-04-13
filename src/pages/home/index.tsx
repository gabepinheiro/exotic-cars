import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Car } from '@/resources/types'
import { CarCard } from '@/components/car-card'
import { http } from '@/service'

import * as S from './styles'

function HomePage () {
  const [isFetching, setIsFetching] = useState(true)
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    const fetchCars = async () => {
      const { data } = await http.get('/cars')
      setCars(data.cars)
      setIsFetching(false)
    }

    fetchCars()
  }, [])

  if (isFetching) return null

  return (
    <S.Wrapper>
      {cars.map(({ id, ...props }) => (
        <Link key={id} to={`/car-details/${id}`}>
          <CarCard key={id} {...props} />
        </Link>
      ))}
    </S.Wrapper>
  )
}

export default HomePage
