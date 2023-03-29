
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Samsung</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.samsung.com/in/offer/online/samsung-fest/">Home</Nav.Link>
            <Nav.Link href="https://www.samsung.com/in/mobile-accessories/25w-changer-ta800-ep-ta800xbngin/">Charger</Nav.Link>
            <Nav.Link href="https://www.samsung.com/in/tablets/">Tabs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header