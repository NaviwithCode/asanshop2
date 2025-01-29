import React from "react";
import Slider from "react-slick";
import slide2 from '../img/02.webp'
import slide1 from '../img/01.webp'
import "../index.css"
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
    // fade:true,
    // arrow:true
  };
  return (
    <div className="">
    <Slider {...settings} className="p-2">
      <div className="">
        <img src={slide1} className="rounded-md"/>
    
      </div>
      <div className="">
      <img src={slide2}/>
      {/* <div className="infod">
        <h2 className="mb-4">DIGITAL SMART</h2>
        <h1>WATCH</h1>
        {/* <p>Get New iPhone From Our Shop Now</p> */}
        {/* </div> */}
      </div>
    
    </Slider>
    {/* <div className="btn text-xl">
    <button className="flex items-center bg-white px-3 py-3 rounded-3xl font-bold shadow-lg"><a href="/products">Shop</a></button>
    </div> */}
    </div>
  );
}