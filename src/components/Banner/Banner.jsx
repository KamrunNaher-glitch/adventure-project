import React from 'react';
import bannerImg1 from "../../assets/Banner1.jpeg"
import bannerImg2 from "../../assets/Banner2.jpeg"
import bannerImg3 from "../../assets/Banner3.jpeg"

const Banner = () => {
    return (
        <div className="carousel w-full  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img 
      src={bannerImg1}
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={bannerImg2}
      className="w-full h-[500px] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={bannerImg3}
      className="w-full h-[500px] object-cover " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
        
    );
};

export default Banner;

