import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout, TopButton } from '@/components'
import { HomePage, CarDetailsPage } from '@/pages'

export function App () {
  const handlerScrollTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <Suspense fallback='Loading...'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/car-details/:carId' element={<CarDetailsPage />} />
        </Routes>
      </MainLayout>
      <TopButton onClick={handlerScrollTop} />
    </Suspense>
  )
}
