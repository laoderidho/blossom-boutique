import React from 'react'
import LayoutUser from './components/menu/LayoutUser'
import Jumbotron from './components/homepage/Jumbotron'
import MenuJumbotron from './components/homepage/MenuJumbotron'

const Home = () => {
  return (
    <LayoutUser>
      <Jumbotron />
      <MenuJumbotron />
    </LayoutUser>
  )
}

export default Home