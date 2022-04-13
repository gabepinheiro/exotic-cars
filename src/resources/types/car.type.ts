export type CarColor = {
  id: number
  color: string
  image: string
}

export type Car = {
  id: number
  brand: string
  model: string
  brandImage: string
  thumb: string
  rentAmount: number
  per: string
  colors: CarColor[]
}
