import React from 'react'
import blossom_logo from '../../img/blossom_logo.png'
import { Container } from 'react-bootstrap'

const Kontak = () => {
  return (
    <div id="kontak" className="mt-5 d-flex mb-5">
      <div className="mx-5">
        <img src={blossom_logo} alt="" className="kontak-img" />
        <h1 className="title">
          <u>THE BLOSSOM BOUTIQUE</u>
        </h1>
      </div>
      <div>
        <h1 className="kontak-title">
          <i>Contact Us</i>
        </h1>

        <h4 className="mt-5">PHONE NUMBER</h4>
        <p className="p-0 m-0 kontak-subtitle">(0881)-7849-201 ( Mila Rosita)</p>
        <p className="p-0 m-0 kontak-subtitle">(0881)-9907- 505 (Fuji Nurdiani)</p>

        <h4 className="mt-5">EMAIL ADDRESS</h4>
        <p className="p-0 m-0 kontak-subtitle">milarosita200@gmail.com</p>
        <p className="p-0 m-0 kontak-subtitle">fujinurdiani@gmail.com</p>

        <h4 className="mt-5">FLOWER SHOP ADDRESS</h4>
        <p className="p-0 m-0 kontak-subtitle">
          JL. terusan sersan bajuri no. 123 Kab.Bandung Barat
        </p>
      </div>
    </div>
  );
}

export default Kontak