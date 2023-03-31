import React, { createContext, useState } from 'react'
import { ingredients } from '../data'
import PropTypes from 'prop-types'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(ingredients)
  const [total, setTotal] = useState(0)
  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node
}

export { CartProvider }
