import React from 'react'
import Oferta from './Oferta'
import './Ofertas.css'
import machupicchu from "../../assets/machupicchu.jpg";
import manu from "../../assets/manu.jpg";
const dataHelper = [
  {
    time: '2 días',
    name: 'Cusco Imperdible',
    price_after : 1070,
    price_before: 1200,
    img:machupicchu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  },
  {
    time: '4 días',
    name: 'Manu unico de la naturaleza',
    price_after : 3000,
    price_before: 4000,
    img:manu
  }
]

const Ofertas = () => {
  return (
    <div className='ofertas'>
      {dataHelper.map((item) => 
          <Oferta 
          className="oferta__container" 
          time={item.time}
          name={item.name}
          price_after={item.price_after}
          price_before={item.price_before}
          img={item.img}
          ></Oferta>
      )}
    </div>
  )
}

export default Ofertas