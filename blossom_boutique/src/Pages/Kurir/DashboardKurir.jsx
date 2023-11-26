import React from 'react'
import LayoutKurir from './LayoutKurir'

const DashboardKurir = () => {

    const name = sessionStorage.getItem('name')
  return (
    <LayoutKurir>
        <h1 className='title'>Welcome {name}</h1>
    </LayoutKurir>
  )
}

export default DashboardKurir