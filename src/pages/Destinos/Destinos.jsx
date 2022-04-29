import Machupicchu from "../../assets/machupicchu.jpg";
import cañonColca from "../../assets/cañonColca.jpg";
import manu from "../../assets/manu.jpg";
import "./Destinos.css";
const dataHelper = [
  {
    title: "Machupicchu",
    description:
      "Esta antigua ciudad inca es uno de los tesoros más preciados de Perú. Fue construida a mediados del siglo XV y se cree que fue una de las residencias del noveno inca del Tahuantinsuyo, Pachacútec, aunque en ella también están los restos de un santuario.",
    img: Machupicchu,
  },
  {
    title: "Cañon Colca",
    description:
      "El Cañón del Colca llega a una profundidad de 4.160m y toda la zona es de alta belleza paisajística. Además, en el Valle del Colca verás llamas, alpacas, vicuñas y el cóndor de los Andes.",
    img: cañonColca,
  },
  {
    title: "Tambopata",
    description:
      "La Reserva Nacional Tambopata es 274,690 hectáreas (1,061 millas cuadradas) de tierra preservada en el sureste de Perú. La reserva tiene muchos hábitats diversos, incluidas las tierras bajas de la selva amazónica, los bosques ribereños y los lagos herradura.",
    img: manu,
  },
  {
    title: "Manu",
    description:
      "Se ubica en la cuenca del río Manu, regiones de Cusco y Madre de Dios. Es un área natural protegida que alberga una exquisita biodiversidad reconocida a nivel mundial y resguardada del impacto humano.",
    img: manu,
  },
];

const Destinos = () => {
  return (
    <section className="destino__section">
      <h2>Nuestros destinos turísticos</h2>
      <div className="destino__container">
        {dataHelper.map((item, index) => {
          return (
            <div className="destino__card">
              <div className="card-text">
                <h4>{item.title}</h4>
                <p>
                  {item.description}
                </p>
                <button className="btn btn-mas">Ver mas</button>
              </div>
              <div className="card-img">
                <img src={item.img} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Destinos;
