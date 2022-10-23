import Ofertas from "../../components/Ofertas/Ofertas";
import "./Promociones.css";

const Promociones = () => {
  return (
    <>
      <div className="head">
        <div className="header">
          <div className="header__contain">
            <h2>Tenemos buenos paquetes para ti viajero</h2>
            <a href="#/info" className="btn btn-mas btn-ofertas">
              Ver ofertas
            </a>
          </div>
        </div>
      </div>
      <section id="promociones" className="promociones">
        <h2>Promociones</h2>
        <Ofertas></Ofertas>
      </section>
    </>
  );
};

export default Promociones;
