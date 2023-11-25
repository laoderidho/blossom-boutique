import React from 'react'
import { Container, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LayoutAdmin = (props) => {
  return (
    <Container>
      <Navbar expand="lg" bg="ligth" data-bs-theme="ligth">
        <Container>
          <Navbar.Brand href="#">Blossom Boutique</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Link
              className="nav-link text-dark m-2 title-nav"
              to="/admin/dashboard"
            >
              Home
            </Link>
            <Link
              className="nav-link text-dark m-2 title-nav"
              to="/admin/product"
            >
              Product
            </Link>
            <Link className="nav-link text-dark m-2 title-nav" to="/admin/sale">
              Sale
            </Link>
            {/* <NavDropdown title={username} className="text-dark m-3 title-nav">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>{props.children}</div>

    </Container>
  );
}

export default LayoutAdmin