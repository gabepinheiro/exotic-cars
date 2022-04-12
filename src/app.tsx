import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout, TopButton } from '@/components'
import { HomePage, CarDetailsPage } from '@/pages'

export function App () {
  return (
    <Suspense fallback='Loading...'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/car-details' element={<CarDetailsPage />} />
        </Routes>
      </MainLayout>
      <TopButton />
    </Suspense>
  )
}
