import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Burger from './Burger'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { UserContext } from '../contexts/UserContext'

const Checkout = () => {
  const [show, setShow] = useState(false)
  const {
    name,
    setName,
    street,
    setStreet,
    zipCode,
    setZipCode,
    country,
    setCountry,
    setOrderDone
  } = useContext(UserContext)
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    setOrderDone(true)
    alert('Order is done')
    navigate('/')
  }

  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-5'>
      <h2>We hope it tastes well!</h2>
      <Burger />
      <Link to="/">Cancel</Link>
      <Button onClick={() => setShow(true)}>Continue</Button>
      {show && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>street</Form.Label>
            <Form.Control
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              placeholder="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>zipCode</Form.Label>
            <Form.Control
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="text"
              placeholder="text"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>country</Form.Label>
            <Form.Control
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              placeholder="text"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Order
          </Button>
        </Form>
      )}
    </div>
  )
}

export default Checkout
