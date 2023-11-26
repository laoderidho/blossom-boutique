import React, { useEffect, useState } from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LayoutAdmin = (props) => {
  const [username, setUsername] = useState(sessionStorage.getItem('name'));
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
      <Navbar
        expand="lg"
        bg="ligth"
        data-bs-theme="ligth"
        className="shadow"
      >
        <Container>
          <Navbar.Brand href="#">Blossom Boutique</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className="justify-content-end">
            <Link className="nav-link text-dark m-2 title-nav" to="/">
              Home
            </Link>
            <Link
              className="nav-link text-dark m-2 title-nav"
              to="/admin/produk"
            >
              Produk
            </Link>
            <Link
              className="nav-link text-dark m-2 title-nav"
              to="/admin/penjualan"
            >
              Penjualan
            </Link>
            <Link
              className="nav-link text-dark m-2 title-nav"
              to="/admin/user"
            >
              User
            </Link>
            <NavDropdown title={username} className="text-dark m-3 title-nav">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>{props.children}</div>

      <footer className="mt-5 bg-dark d-flex align-items-center justify-content-center p-3">
        <p className="text-white m-0 text-center">
          © 2023 The Blossom Boutique. Seluruh hak dilindungi oleh hukum. Dilarang
          melakukan reproduksi tanpa izin tertulis.
        </p>
      </footer>
    </>
  );
};

export default LayoutAdmin;
