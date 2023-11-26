import React, { useState } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LayoutUser = (props) => {
  const [username] = useState(sessionStorage.getItem("name"));

  const links = [
    { role: "admin", to: "/admin/dashboard", text: "Dashboard" },
    { role: "user", to: "/users/dashboard", text: "Dashboard" },
    { role: "kurir", to: "/kurir/dashboard", text: "Dashboard" },
  ];

  const [role] = useState(sessionStorage.getItem("role"));
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Navbar
        expand="lg"
        bg="white"
        data-bs-theme="ligth"
        className="border fixed-top mb-5"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Link className="m-2 link-title" to="/admin/dashboard">
              Beranda
            </Link>
            <Link className="link-title m-2" to="/admin/product">
              Visi & Misi
            </Link>
            <Link className="link-title m-2" to="/admin/sale">
              Tentang Kami
            </Link>
            <Link className="link-title m-2" to="/admin/sale">
              Keunggulan Pelayanan
            </Link>
            <Link className="link-title m-2" to="/admin/sale">
              Produk
            </Link>
            <Link className="link-title m-2" to="/admin/sale">
              Ulasan
            </Link>
            <Link className="link-title m-2" to="/admin/sale">
              Kontak
            </Link>
            {links
              .filter((link) => link.role === role)
              .map((link, index) => (
                <Link key={index} className="link-title m-2" to={link.to}>
                  {link.text}
                </Link>
              ))}

            {username ? (
              <NavDropdown title={username} className="link-title">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link className="px-3" to="/login">
                Login
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">{props.children}</div>
    </>
  );
};

export default LayoutUser;
