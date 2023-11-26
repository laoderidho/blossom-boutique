import React from 'react'
import LayoutUser from './components/menu/LayoutUser'
import Jumbotron from './components/homepage/Jumbotron'
import MenuJumbotron from './components/homepage/MenuJumbotron'
import VisiMisi from './components/homepage/VisiMisi'
import AboutUs from './components/homepage/AboutUs'

const Home = () => {
  return (
    <LayoutUser>
      <Jumbotron />
      <MenuJumbotron />
      <VisiMisi />
      <AboutUs />
    </LayoutUser>
  )
}

export default Home