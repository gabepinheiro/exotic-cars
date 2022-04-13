import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Car } from '@/resources'
import { http } from '@/service'
import { ButtonLink, CarSlider, LoadingOverlay } from '@/components'

import * as S from './styles'

function CarDetailsPage () {
  const { carId } = useParams<{carId: string}>()
  const navigate = useNavigate()

  const [isFetching, setIsFetching] = useState(true)
  const [car, setCar] = useState<Car | null>(null)
  const [carColorIndex, setCarColorIndex] = useState<number>(0)

  const slideItems = useMemo(() => {
    return car?.colors.map(({ id, image }) => ({ id, image }))
  }, [car])

  const handleChangeColorIndex = useCallback((index: number) => {
    setCarColorIndex(index)
  }, [])

  const handleBackToCatalog = useCallback(() => {
    navigate(-1)
  }, [navigate])

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data: { car: carData } } = await http.get(`/cars/${carId}`)
        setCar(carData)
      } catch (error) {

      } finally {
        setIsFetching(false)
      }
    }

    fetchCar()
  }, [carId])

  if (isFetching && !car) {
    return <LoadingOverlay />
  }

  return (
    <S.Wrapper>
      {car && (
        <>
          <S.CarInfo>
            <S.BrandImage
              src={car.brandImage}
              alt={`${car.brand} ${car.model}`}
            />
            <S.BrandModelRentWrapper>
              <S.BrandModel>{car.brand} {car.model}</S.BrandModel>
              <S.Rent>{car.rentAmount}/{car.per}</S.Rent>
            </S.BrandModelRentWrapper>
          </S.CarInfo>
          <S.CarImageWrapper>
            <ButtonLink
              to='#'
              reverse='true'
              variant='outlined'
              onClick={handleBackToCatalog}
            >
              Back to catalog
            </ButtonLink>
            <S.CarImage
              src={car.colors[carColorIndex].image}
              alt={car.model}
            />
            <S.Color>
              <span>{String(carColorIndex + 1).padStart(2, '0')}</span>
              <span className='colorName'>{car.colors[carColorIndex].color}</span>
            </S.Color>
          </S.CarImageWrapper>
          <S.Center>
            <ButtonLink to='#'>Book now</ButtonLink>
          </S.Center>

          <S.SliderWrapper>
            <CarSlider
              items={slideItems!}
              onChangeColorIndex={handleChangeColorIndex}
            />
          </S.SliderWrapper>
        </>
      )}
    </S.Wrapper>
  )
}

export default CarDetailsPage
