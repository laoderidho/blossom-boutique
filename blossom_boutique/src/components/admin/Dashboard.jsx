import React from 'react'
import LayoutAdmin from './LayoutAdmin'

const Dashboard = () => {
  
  const name = sessionStorage.getItem('name');
  return (
    <LayoutAdmin>
        <div className='dashboard'>
            <h1 className='text-center mt-5'>Welcome {name}</h1>
        </div>
    </LayoutAdmin>
  )
}

export default Dashboard