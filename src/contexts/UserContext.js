import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [zipCode, setZipCode] = useState()
  const [country, setCountry] = useState('')
  const [orderDone, setOrderDone] = useState(false)

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        auth,
        setAuth,
        name,
        setName,
        street,
        setStreet,
        zipCode,
        setZipCode,
        country,
        setCountry,
        orderDone,
        setOrderDone
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

export { UserProvider }
