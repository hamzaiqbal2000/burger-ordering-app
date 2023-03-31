export const ingredients = [
  {
    name: 'lettuce',
    price: 0.5,
    amount: 0
  },
  {
    name: 'bacon',
    price: 0.7,
    amount: 0
  },
  {
    name: 'cheese',
    price: 1,
    amount: 0
  },
  {
    name: 'meat',
    price: 1.2,
    amount: 0
  }
]

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}

export function getTotal (total) {
  return total.toLocaleString(undefined, currencyOptions)
}
