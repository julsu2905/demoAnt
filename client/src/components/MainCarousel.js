import { Row, Carousel } from "antd";
import React, { useState } from "react";

const MainCarousel = () => {
  const contentStyle = {
    height: "419px",
    width: "100%",
    lineHeight: "160px",
    textAlign: "center"
  };
  return (
    <Carousel autoplay>
      <div className="carousel-content-wrapper">
        <img
          style={contentStyle}
          alt="carousel-img"
          src="http://kimhangonline.vn/wp-content/uploads/2021/02/Banne-bếp-vàng-ok.jpg"
        ></img>
      </div>
      <div className="carousel-content-wrapper">
        <img
          style={contentStyle}
          alt="carousel-img"
          src="http://kimhangonline.vn/wp-content/uploads/2019/08/cho-xoi-bau.jpg"
        ></img>
      </div>
      <div className="carousel-content-wrapper">
        <img
          style={contentStyle}
          alt="carousel-img"
          src="http://kimhangonline.vn/wp-content/uploads/2019/08/noi-cam-ung-da-nang-1.jpg"
        ></img>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
