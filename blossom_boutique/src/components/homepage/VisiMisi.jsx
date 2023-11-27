import React from 'react'
import visi_blossom from '../../img/visi_blossom.png'
import misi_blossom from '../../img/misi_blossom.png'
import {Row, Col} from 'react-bootstrap'

const VisiMisi = () => {
  return (
    <div id="visimisi" className="">
      <Row>
        <Col className="visi d-flex justify-content-center flex-column align-items-center">
          <h1 className="visi_misi_logo">
            <i class="fa-solid fa-shield-halved"></i>
          </h1>
          <h1>Visi</h1>

          <p className="text-center px-5 h5 mt-3">
            Menjadi toko bucket bunga terkemuka yang menyebarkan inspirasi &
            kebahagiaan melalui kreasi bunga perusahaan kami yang indah dan
            inovatif, serta memberikan pengalaman berbelanja yang menyenangka &
            memuaskan
          </p>
        </Col>
        <Col className="misi d-flex justify-content-center flex-column align-items-center">
          <h1 className="text-white visi_misi_logo">
            <i class="fa-solid fa-cube"></i>
          </h1>

          <h1 className="">Misi</h1>

          <p className="text-center text-white px-5 mt-3 h5">
            menyediakan bucket bunga berkualitas tinggi dengan desain kreatif
            dan menarik, sambil menjaga komitmen terhadap kualitas keberlanjutan
            lingkungan, dan kontribusi sosial.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default VisiMisi