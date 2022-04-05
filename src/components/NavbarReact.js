import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Outlet } from "react-router-dom";

export default function NavbarReact() {
  return (
      <>  
        <Navbar bg="dark" variant="dark">
            <Container>              
              <Navbar.Brand href="/"> SQ Project </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link style={{marginLeft: '30px'}} href="/">Home</Nav.Link>
                <Nav.Link style={{marginLeft: '30px'}} href="/projects">Projects </Nav.Link>
                <Nav.Link style={{marginLeft: '30px'}} href="clients"> Admin </Nav.Link>
                <Nav.Link style={{marginLeft: '30px'}} href="unattempted">Unattempted </Nav.Link>
                <Nav.Link href="reviewed">Reviewed </Nav.Link>
                <Nav.Link href="under-review">Under Review </Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        <Outlet/>
      </>
  )
}
