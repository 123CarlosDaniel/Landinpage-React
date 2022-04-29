
const Oferta = (props) => {
  return (
    <div className={props.className}>
      <div className="oferta">
        <div className="background__oferta">
          <img src={props.img}/>
        </div>
        <div className="card">
        <div className="card__head">
          <h3>{props.time}</h3>
          <h2>{props.name}</h2>
        </div>
        <div className="card__footer">
          <span className="price__after">$ {props.price_after}</span>
          <span className="price__before">Antes $ {props.price_before}</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Oferta