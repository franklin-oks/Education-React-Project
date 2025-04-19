import "./Testimonials.css";
import me from "../../assets/me.jpg";
import Gerald from "../../assets/Gerald.jpg";
import paul from "../../assets/paul.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

import React, { useRef } from "react";

const Testimonials = () => {
  const sliderUl = useRef();
  let intialSlide = 0;

  const forwardSlide = () => {
    if (intialSlide > -50) {
      intialSlide -= 25;
    }
    sliderUl.current.style.transform = `translateX(${intialSlide}%)`;
  };

  const backSlide = () => {
    if (intialSlide < 0) {
      intialSlide += 25;
    }
    sliderUl.current.style.transform = `translateX(${intialSlide}%)`;
  };

  return (
    <div className="testimonials" id="testimonials">
      <div onClick={backSlide} className="prev-btn">
        <FaArrowLeft />
      </div>
      <div onClick={forwardSlide} className="next-btn">
        <FaArrowRight />
      </div>
      <div className="slider">
        <ul ref={sliderUl}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={me} alt="me" />
                <div>
                  <h3>Franklin Obinna</h3>
                  <span>Rhema Academy, USA</span>
                </div>
              </div>
              <p>
                Chosing to pursue my degree at Rhema Academy was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truely exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Gerald} alt="me" />
                <div>
                  <h3>Engr. G.O</h3>
                  <span>Rhema Academy, Germany</span>
                </div>
              </div>
              <p>
                Chosing to pursue my degree at Rhema Academy was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truely exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={paul} alt="me" />
                <div>
                  <h3>Paul Ken </h3>
                  <span>Educity, Germany</span>
                </div>
              </div>
              <p>
                Chosing to pursue my degree at Rhema Academy was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truely exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={me} alt="me" />
                <div>
                  <h3>Tessy Love</h3>
                  <span>Rhema Academy, England</span>
                </div>
              </div>
              <p>
                Chosing to pursue my degree at Rhema Academy was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truely exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
