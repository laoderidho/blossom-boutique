import React from 'react'
import blossom_logo from '../../img/blossom_logo.png'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

const Kontak = () => {
  return (
    <div id="kontak" className="bg-dark">
      <Row className="p-5">
        <Col className="d-flex flex-column align-items-center">
          <img src={blossom_logo} alt="" className="kontak-logo-img" />
          <p className="text-white h1 mt-3">
            <u>The Blossom Boutique</u>
          </p>
        </Col>
        <Col>
          <h2 className="text-white">
            <i>Contact Us</i>
          </h2>

          <h5 className="text-white mt-4">
            <i class="fa-solid fa-phone"></i> Phone Number
          </h5>
          <p className="text-white mt-3">
            (0881)-7849-201 ( Mila Rosita)
            <br />
            (0881)-9907- 505 (Fuji Nurdiani)
          </p>

          <h5 className="text-white mt-4">
            <i class="fa-solid fa-envelope"></i> Email
          </h5>
          <p className="text-white mt-3">
            milarosita200@gmail.com
            <br />
            fujinurdiani@gmail.com
          </p>

          <h5 className="text-white mt-4">
            <i class="fa-solid fa-location-dot"></i> Address
          </h5>

          <p className="text-white mt-3">
            JL. terusan sersan bajuri no. 123 Kab.Bandung Barat
          </p>
        </Col>
      </Row>

      <footer className='footer-menu'>
          <Row className="d-flex justify-content-center align-items-center pt-2">
            <Col className="text-center">
              <p className="text-white">
                &copy; 2021 The Blossom Boutique. All Rights Reserved.
              </p>
            </Col>
          </Row>
      </footer>
    </div>
  );
}

export default Kontak