import { CarCard } from '@/components/car-card'

import { cars as DUMMY_CARS } from '@/resources'

function HomePage () {
  return (
    <div>
      {
        DUMMY_CARS.map(car => (
          <CarCard key={car.id} {...car} />
        ))
      }
    </div>
  )
}

export default HomePage
