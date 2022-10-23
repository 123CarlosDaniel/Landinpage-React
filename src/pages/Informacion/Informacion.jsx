import React from 'react'
import  './Informacion.css'
const Informacion = () => {
  return (
    <section className='informacion__container'>
      <h2>Datos del desarrollador</h2>
      <div className="informacion">
        <p>Nombres: Carlos Daniel C.M.</p>
        <p>Grado : Desarrollador Full Stack Junior</p>
        <p>Email : <span>carloss_jt@hotmail.com</span></p>
        <p>Descripcion : Soy un programador autodidacta con la capacidad de encontrar soluciones a todo lo que me proponga, me gusta aprender nuevas tecnologías para asi tener mayores conocimientos en diversas áreas de la programación.</p>
        <p>Conocimientos : HTML, CSS3, Responsive Design, Javascript ES6+, React 18, NodeJs, MongoDB, Express</p>
        <p>Capacidad : Creacion de paginas web estaticas o dinamicas, creacion de API's de tipo REST, creacion de aplicaciones Backend con NodeJs</p>
      </div>
    </section>
  )
}

export default Informacion