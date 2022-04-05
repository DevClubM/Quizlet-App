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

                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="clients">Clients</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        <Outlet/>
      </>
  )
}
