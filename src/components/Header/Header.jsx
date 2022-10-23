import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
    <div className='background'>
    </div>
    <div className='header'>
      <div className='header__contain'>
      <h1 className='header__title'>Lorem ipsum dolor sit amet consectetur.</h1>
      <p className='header__description'>Lorem ipsum dolor sit amet.</p>
      <h5 className='image-info'>Coordillera Huayhuash, Áncash</h5>
      <a className='btn btn-mas' href='#/info'>Mas información</a>
      </div>
    </div>
    </header>
    )
}

export default Header