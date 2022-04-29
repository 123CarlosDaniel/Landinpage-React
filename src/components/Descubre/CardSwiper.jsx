import React from 'react'
import {GoLocation} from 'react-icons/go'
const CardSwiper = (props) => {
  return (
    <div className='card__container'>
      <div className="card__image">
        <img src={props.image}/>
      </div>
      <div className='card__description'>
        <h3> <GoLocation className='location' />{props.title}, {props.location}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default CardSwiper