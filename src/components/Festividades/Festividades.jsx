import {useState,useEffect} from 'react'
import Uyuni from "../../assets/uyuni.jpg";
import manu from "../../assets/manu.jpg";
// import Tambopata from "../../assets/tambopata.jpg";
import machupicchu from "../../assets/machupicchu.jpg";
import CardSwiper from '../Descubre/CardSwiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import './Festividades.css';
const dataHelper = [
  {
    image: Uyuni,
    title: "Uyuni",
    location: "Bolivia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quos!"
  },
  {
    image: manu,
    title: "Manu",
    location: "Madre de Dios",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  // {
  //   image: Tambopata,
  //   title: "Tambopata",
  //   location: "Amazonas",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  // },
  {
    image: machupicchu,
    title: "Machu Picchu",
    location: "Peru",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

const Festividades = () => {
  const [range, setRange] = useState(undefined)
  useEffect(() => {
    if(window.innerWidth<1027){
      setRange(2)
    }
    if(window.innerWidth>1027){
      setRange(3)
    }
    if(window.innerWidth<500){
      setRange(1)
    }
  
    return () => {
      console.log("cleanup");
    }
  }, [])
  

  window.addEventListener("resize", () => {
    if (window.innerWidth< 1200 && window.innerWidth>=855) {
      setRange(2)
    }
    if(window.innerWidth>1200){
      setRange(3)
    }
    if(window.innerWidth<855){
      setRange(1)
    }
  })
  return (
    <section className="descubre">
      <h2>Descubre tu cultura</h2>
      <h5>Tenemos excelentes destinos festivos.</h5>
      <div className="swiper-container festivo">
        
        <div className="swiper__container container-festivo">
          <Swiper 
            spaceBetween={40}
            slidesPerView={range}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
          {dataHelper.map((item) => (
            <SwiperSlide>
              <CardSwiper
              image={item.image}
              title={item.title}
              location={item.location}
              description={item.description}
            ></CardSwiper>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Festividades