import React from 'react'
import visi_blossom from '../../img/visi_blossom.png'
import misi_blossom from '../../img/misi_blossom.png'
import { Container } from 'react-bootstrap'

const VisiMisi = () => {
  return (
    <div className="visi-misi p-5">
      <div className="w-50 mx-5">
        <img src={visi_blossom} alt="" />
        <p className="pt-5 visi-subtitle" data-aos="fade-up">
          Menjadi toko bucket bunga terkemuka yang menyebarkan inspirasi &
          kebahagiaan melalui kreasi bunga perusahaan kami yang indah dan
          inovatif, serta memberikan pengalaman berbelanja yang menyenangka &
          memuaskan
        </p>
      </div>
      <div className="w-100 d-flex justify-content-end">
        <div className="w-50 text-right">
          <img src={misi_blossom} alt="" />
          <p className="pt-5 visi-subtitle" data-aos="fade-up">
            Misi kami adalah untuk menyebarkan kebahagiaan melalui kreasi bunga
            yang indah dan inovatif, serta memberikan pengalaman berbelanja yang
            menyenangkan & memuaskan
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi