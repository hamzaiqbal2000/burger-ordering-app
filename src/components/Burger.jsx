import React, { useContext } from 'react'
import { Wrapper, Image } from '../styles/burger'
import burgerDown from '../assets/burger_down.png'
import burgerTop from '../assets/burger_top.png'
import lettuce from '../assets/lettuce.png'
import bacon from '../assets/bacon.png'
import cheese from '../assets/cheese.png'
import meat from '../assets/meat.png'

import { CartContext } from '../contexts/CartContext'

function repeatImage (amount, ingredient) {
  return [...Array(amount)].map((i) => <Image src={ingredient} alt={ingredient} key={i} />)
}

const Burger = () => {
  const { cart } = useContext(CartContext)

  return (
    <Wrapper>
      <Image src={burgerTop} alt="burger_top" />
      {cart.map((item) => {
        if (item.name === 'lettuce') {
          return repeatImage(item.amount, lettuce)
        } else if (item.name === 'bacon') {
          return repeatImage(item.amount, bacon)
        } else if (item.name === 'cheese') {
          return repeatImage(item.amount, cheese)
        }
        return repeatImage(item.amount, meat)
      })}
      <Image src={burgerDown} alt="burger_down" />
    </Wrapper>
  )
}

export default Burger
