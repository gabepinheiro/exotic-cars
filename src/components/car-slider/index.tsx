import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import * as S from './styles'

type SlideItem = {
  id: number
  image: string
}

type CarSliderProps = {
  items: SlideItem[]
}

export const CarSlider = ({ items }: CarSliderProps) => {
  return (
    <S.Wrapper>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides
        centeredSlidesBounds
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop
      >
        {items.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <S.SliderItem>
              <S.CarImage src={image} />
            </S.SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev'>
        <BsArrowLeft />
      </button>
      <button className='swiper-button-next'>
        <BsArrowRight />
      </button>
    </S.Wrapper>
  )
}
