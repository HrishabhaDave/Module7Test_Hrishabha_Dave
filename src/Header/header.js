import React from 'react'
import Image from '../Assets/container-fluid.jpg'
import './header.css'

function Header() {
  return (
    <div className='header-img'>
        <img src={Image}/>
    </div>
  )
}

export default Header