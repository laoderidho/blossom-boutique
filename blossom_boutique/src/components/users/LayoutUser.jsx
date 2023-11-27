import React, {useEffect, useState} from 'react'
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const LayoutUser = (props) => {
    const [username, setUsername] = useState(sessionStorage.getItem("name"));
    const navigate = useNavigate();

    const handleLogout = () => {
      sessionStorage.clear();
      setUsername("");
      navigate("/login");
    };

    useEffect(() => {
      const nama = sessionStorage.getItem("name");
      setUsername(nama);
    }, []);

    useEffect(() => {
      const nama = sessionStorage.getItem("name");
      setUsername(nama);
    }, [username]);
    return (
      <>
        <Navbar expand="lg" bg="ligth" data-bs-theme="ligth" className="shadow">
          <Container>
            <Navbar.Brand href="#">Blossom Boutique</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className="justify-content-end">
              <Link className="nav-link text-dark m-2 title-nav" to="/">
                Home
              </Link>
              <Link
                className="nav-link text-dark m-2 title-nav"
                to="/users/produk"
              >
                Produk
              </Link>
              <Link
                className="nav-link text-dark m-2 title-nav"
                to="/users/keranjang"
              >
                Keranjang
              </Link>
              <Link
                className="nav-link text-dark m-2 title-nav"
                to="/users/status-paket"
              >
                Status Paket
              </Link>
              <NavDropdown title={username} className="text-dark m-3 title-nav">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
                <NavDropdown.Item>
                   <Link to="/users/testimoni" className='nav-link'>
                      Berikan testimoni
                   </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>{props.children}</div>
      </>
    );
}

export default LayoutUser