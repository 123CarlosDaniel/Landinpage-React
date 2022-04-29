import React,{useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CardSwiper from "./CardSwiper";
import Uyuni from "../../assets/uyuni.jpg";
import manu from "../../assets/manu.jpg";
import Tambopata from "../../assets/tambopata.jpg";
import machupicchu from "../../assets/machupicchu.jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import "./Descubre.css";

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
  {
    image: Tambopata,
    title: "Tambopata",
    location: "Amazonas",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    image: machupicchu,
    title: "Machu Picchu",
    location: "Peru",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
];

const Descubre = () => {
  const [range, setRange] = useState(undefined)
  useEffect(() => {
    if(window.innerWidth<1027){
      setRange(1)
    }
    else {
      setRange(2)
    }
  
    return () => {
      console.log("cleanup");
    }
  }, [])
  

  window.addEventListener("resize", () => {
    if (window.innerWidth< 1027) {
      setRange(1)
    }
    else {
      setRange(2)
    }
  })
  return (
    <section id="descubre" className="descubre">
      <h2>Descubre tu país</h2>
      <h5>Tenemos excelentes destinos para ti y tu familia.</h5>
      <div className="swiper-container">
        <div className="description">
          <h3>Lorem ipsum dolor sit.</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ut.
          </p>
        </div>
        <div className="swiper__container">
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
};

export default Descubre;
