import React,{useState} from 'react'
import './Nav.css'
import {SiYourtraveldottv as Travel} from 'react-icons/si'
import { Link } from 'react-router-dom'
const Nav = () => {
  const [hamburger, setHamburger] = useState(false)
  const [navBar, setNavBar] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', handleScroll)

  const handleHamburger = () => {
    setHamburger(!hamburger)
  }
  return (
    <nav className={navBar?'nav active':'nav'} >
      <div className='nav__logo' ><span className='logo'><Travel/></span><span><Link to={'/'}>Viaja Perú</Link></span></div>
      <div className='nav___items'>
        <ul className={hamburger?'nav__items-container active':'nav__items-container '}>
          <li className='nav__item'><Link to={'/promociones'}>Promociones</Link></li>
          <li className='nav__item'><Link to={'/destinos'}>Destinos</Link></li>
          <li className='nav__item'><Link to={'/info'}>Información</Link></li>
        </ul>
        {/* hamburger buttom */}
        <div className={ hamburger?'nav__hamburger active':'nav__hamburger'} onClick={handleHamburger}>
          <div className='nav__hamburger-line'></div>
          <div className='nav__hamburger-line'></div>
          <div className='nav__hamburger-line'></div>
        </div>
      </div>
    </nav>
  )
}

export default Nav