import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { detail } from "../../utils/const";
import Fruits from "../../assets/gif/fruits.gif";

const SlickSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <Slider {...settings}>
        {detail.map((item1, index1) => {
          return (
            <div key={index1}>
              <h1>{item1.question}</h1>
              <h3>{item1.description}</h3>
              {item1.answers?.map((item2, index2) => {
                return (
                  <div key={index2}>
                    <div>{item2.option}</div>
                    <div>{item2.description}</div>
                  </div>
                );
              })}
              {item1.answer_type === "input" && <input />}
              {item1.id == 1 && <img height={100} width={200} src={Fruits} />}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;
