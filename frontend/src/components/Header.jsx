import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <>
   <Navbar expand="lg" className="bg-body-dark" bg="dark" collapseOnSelect variant="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >ShopZone</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto ">
            <LinkContainer to ='/cart'>
            <Nav.Link >
            <i className="fa-solid fa-cart-shopping"></i>
            &nbsp;Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to ='/signup'>
            <Nav.Link >
            <i className="fa-solid fa-user"></i>
                &nbsp; Sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header