import React from 'react'
import logoPeru from '../../assets/logoPeru.png'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="logos">
        <div className='logo_container'> 
        <img className='logo_Peru' src={logoPeru}/>
        </div>
        <div className="socials">
          <h5>Siguenos: </h5>
          <div className="logos_social">
          <BsFacebook/>
          <AiFillTwitterCircle className='twitter-logo'/>
          <AiFillYoutube className='youtube-logo'/>
          </div>
        </div>
      </div>
      <div className="footer-info">
        <p>Creado por : Charles Daniel </p>
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer