import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import { UserContext } from '../contexts/UserContext'
import { Wrapper, Image, Section } from '../styles/navbar'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { auth, setAuth } = useContext(UserContext)
  return (
    <Wrapper>
      <Image src={logo} alt="burger-logo" />
      <Section>
        <Link className="text-white text-decoration-none m-3" to="/">
          burger builder
        </Link>
        {auth
          ? (
          <>
            <Link className="text-white text-decoration-none m-3" to="/orders">
              Orders
            </Link>
            <Link className="text-white text-decoration-none" onClick={() => setAuth(false)} to="/login">
              Logout
            </Link>
          </>
            )
          : (
          <Link className="text-white text-decoration-none" to="/login">
            Login
          </Link>
            )}
      </Section>
    </Wrapper>
  )
}

export default NavBar
