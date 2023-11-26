import React, { useEffect } from 'react'
import blossom_logo from '../../img/blossom_logo.png'

const MenuJumbotron = () => {

    useEffect(()=>{
        window.AOS.init({
            duration: 900,
            easing: 'ease-in-out',
            once: true
        })
    },[])
    
  return (
    <div className="pages-jumbotron">
      <div className="jumbotron-shadow d-flex flex-column align-items-center justify-content-center">
        <h1
          className="text-white px-5 jumbotron-title text-center"
          data-aos="fade-left"
        >
          THE BLOSSOM BOUTIQUE
        </h1>
        <img src={blossom_logo} alt="" className='mt-5' data-aos="fade-left"/>
        <p className='text-white subtitle-jumbotron mt-5' data-aos="fade-left">PESAN BUNGA CANTIK UNTUK SETIAP MOMEN SPESIAL ANDA</p>
      </div>
    </div>
  );
}

export default MenuJumbotron