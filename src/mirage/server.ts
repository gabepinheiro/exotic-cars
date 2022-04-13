import { createServer, Model, Registry } from 'miragejs'
import { ModelDefinition } from 'miragejs/-types'
import Schema from 'miragejs/orm/schema'
import { cars, Car } from '@/resources'

const CarModel: ModelDefinition<Car> = Model.extend({})

type AppRegistry = Registry<{ car: typeof CarModel }, {}>
type AppSchema = Schema<AppRegistry>

type MakeServerProps = {
  environment: 'development' | 'test'
}

export const makeServer = ({ environment = 'development' }: MakeServerProps) => {
  return createServer({
    environment,

    models: {
      car: Model.extend<Partial<Car>>({}),
    },

    seeds (server) {
      server.db.loadData({
        cars,
      })
    },

    routes () {
      this.passthrough()
      this.namespace = 'api'

      this.get('/cars', (schema: AppSchema) => {
        return schema.all('car')
      })

      this.get('/cars/:carId', (schema: AppSchema, req) => {
        const { carId } = req.params

        return schema.find('car', carId)
      })
    },
  })
}
