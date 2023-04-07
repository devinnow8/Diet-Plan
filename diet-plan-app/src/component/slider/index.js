import React, { useState } from "react";
import Slider from "react-slick";
import "../../assets/style/slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { detail } from "../../utils/const";
import Fruits from "../../assets/gif/fruits.gif";
import logo from "../../assets/logo.svg";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";

const SlickSlider = () => {
  const [value, setValue] = useState(0)
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    setValue((prev) => prev - 1)
  }
  const handleNext = () => {
    setValue((prev) => prev + 1)
  }
  return (
    <div className="container-fluid">
      <img src={logo} alt="logo" />
      <div className="slider-wraper">
        <div className="container">
          <>
            {
              detail.map((item, index) => {
                return (
                  <div className={`row align-items-center slides ${value === index ? "active-slide" : ""}`}>
                    <div className="col-md-6">{value === index && <div className="slider-content animate__animated animate__backInUp">
                      <h5 className="steps">Step 01</h5>
                      <h2>{item.question}</h2>
                      <h6 className="description">{item?.description}</h6>
                      <div>{item?.answer_type === "input" && <input className="answer-input" placeholder="Type your answer here..." />}</div>
                      {
                        item.answers?.map((item2, index) => {
                          return <h6 className="options"><span className="option">A</span>{item2.option}</h6>
                        })
                      }

                      <button className="primary-solid">Next</button>
                    </div>}
                    </div>
                    <div className="col-md-6">
                      {<img width={800} height={600} src={Fruits} />}
                    </div>
                  </div>
                )
              })
            }
          </>
        </div>
        <div className="navigation">
          <button onClick={() => {
            handlePrev()
          }}>       <img src={next} alt="next" /></button>
          <button onClick={() => {
            handleNext()
          }
          }>

            <img src={prev} alt="prev" />
          </button>
        </div>

      </div >
    </div>
  );
};

export default SlickSlider;
