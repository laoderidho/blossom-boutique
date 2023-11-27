import React from 'react'
import LayoutUser from './components/menu/LayoutUser'
import Jumbotron from './components/homepage/Jumbotron'
import MenuJumbotron from './components/homepage/MenuJumbotron'
import VisiMisi from './components/homepage/VisiMisi'
import AboutUs from './components/homepage/AboutUs'
import WhyUs from './components/homepage/WhyUs'
import Produk from './components/homepage/Produk'
import Kontak from './components/homepage/Kontak'
import Penilaian from './components/homepage/Penilaian'

const Home = () => {
  return (
    <LayoutUser>
      <Jumbotron />
      <MenuJumbotron />
      <VisiMisi />
      <AboutUs />
      <WhyUs />
      <Produk />
      <Penilaian  />
      <Kontak />
    </LayoutUser>
  )
}

export default Home