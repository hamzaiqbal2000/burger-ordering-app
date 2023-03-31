import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { CartContext } from '../contexts/CartContext'
import Card from 'react-bootstrap/Card'
import { getTotal } from '../data'

const Orders = () => {
  const { orderDone } = useContext(UserContext)
  const { cart, total } = useContext(CartContext)

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      {orderDone && (
        <Card className='p-3'>
          <h4>Order</h4>
          <ul>
            {cart.map((ingredient) => (
              <li key={ingredient.name}>
                <strong>{ingredient.name}: </strong>
                {ingredient.amount}
              </li>
            ))}
          </ul>
          <h5>
            Current price: <strong>$ {getTotal(total)}</strong>
          </h5>
        </Card>
      )}
    </div>
  )
}

export default Orders
