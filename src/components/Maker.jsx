import React, { useState, useContext } from 'react'
import { Wrapper, Text, Outerdiv, Innerdiv, Buton } from '../styles/maker'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import { getTotal } from '../data'

const Maker = () => {
  const { cart, setCart, total, setTotal } = useContext(CartContext)
  const { auth } = useContext(UserContext)
  const [showModal, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function something (ingredient, action) {
    const newCategories = cart.map((cate) => {
      if (cate.name === ingredient.name) {
        if (action === 'add') {
          cate.amount++
          setTotal((current) => current + ingredient.price)
        } else if (action === 'remove' && cate.amount > 0) {
          cate.amount--
          setTotal((current) => current - cate.price)
        }
      }
      return cate
    })
    return newCategories
  }

  function add (ingredient) {
    setCart(something(ingredient, 'add'))
  }

  function remove (ingredient) {
    console.log('something called')
    setCart(something(ingredient, 'remove'))
  }

  return (
    <>
      <Wrapper>
        <Text>
          Current price: <strong>$ {getTotal(total)}</strong>
        </Text>
        <Outerdiv>
          {cart?.map((ingredient) => (
            <Innerdiv key={ingredient.name}>
              <Text>{ingredient.name}</Text>
              <Buton primary onClick={() => remove(ingredient)}>
                Less
              </Buton>
              <Buton onClick={() => add(ingredient)}>More</Buton>
            </Innerdiv>
          ))}
        </Outerdiv>
        {auth
          ? (
          <Buton end onClick={handleShow}>
            Order Now
          </Buton>
            )
          : (
          <Link to="/login">
            <Buton end>Sign up to Order</Buton>
          </Link>
            )}
      </Wrapper>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Order summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
          <h6>Continue to checkout?</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/checkout">
            <Button variant="primary" onClick={handleClose}>
              Continue
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Maker
