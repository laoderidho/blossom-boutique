import React from 'react'
import LayoutUser from './LayoutUser'

const DashboardUser = () => {

  const name = sessionStorage.getItem('name');

  return (
    <LayoutUser>
      <div className='dashboard'>    
        <h1 className='text-center mt-5'>Welcome {name}</h1>
      </div>
    </LayoutUser>
  )
}

export default DashboardUser