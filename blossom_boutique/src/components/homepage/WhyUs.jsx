import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import bucket_bunga from '../../img/bucket_bunga.png'
import ready from '../../img/ready.png'
import melayani from '../../img/melayani.png'
import jam from '../../img/jam.png'

const WhyUs = () => {
  return (
    <div id='whyus' className="whyUs">
      <div className="whyUsCover">
        <h1 className="title text-center text-white pt-3">
          <u>Kenapa Memilih Produk Kami?</u>
        </h1>
        <p className="text-center text-white h1">
          <u>"the blossom boutique"</u>
        </p>

        <Row className="mt-5">
          <Card as={Col} md={6} className=" bg-transparent border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={bucket_bunga} className="link-photo-why-us" />
              <h5 className="text-white text-center mt-3 h3 w-75">
                bucket bunga the blossom boutique masih segar & indah
                raingkaianya{" "}
              </h5>
            </Card.Body>
          </Card>

          <Card as={Col} md={6} className=" bg-transparent border-0">
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={ready} className="link-photo-why-us" />
              <h5 className="text-white text-center mt-3 h3 w-75">
                untuk pengiriman dalam kota bandung gratis
              </h5>
            </Card.Body>
          </Card>

          <Card as={Col} md={6} className=" bg-transparent border-0 mt-5">
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={melayani} className="link-photo-why-us" />
              <h5 className="text-white text-center mt-3 h3 w-75">
                kami melayani ke seluruh kota di indonesia
              </h5>
            </Card.Body>
          </Card>

          <Card as={Col} md={6} className=" bg-transparent border-0 mt-3">
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={jam} className="link-photo-why-us" />
              <h5 className="text-white text-center mt-3 h3 w-75">
              Ready 24 jam
              </h5>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
}

export default WhyUs