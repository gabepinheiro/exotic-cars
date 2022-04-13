import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import * as S from './styles'

export const CarSlider = () => {
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
        <SwiperSlide>
          <S.SliderItem>
            <S.CarImage src='assets/ferrari/red-color.png' />
          </S.SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <S.SliderItem>
            <S.CarImage src='assets/ferrari/yellow-color.png' />
          </S.SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <S.SliderItem>
            <S.CarImage src='assets/ferrari/gray-color.png' />
          </S.SliderItem>
        </SwiperSlide>
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
