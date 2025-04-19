import React, { useEffect } from "react";
import "./Campus.css";
import me from "../../assets/me.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Campus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <div className="campus" id="campus">
      <div data-aos="zoom-in-up" className="gallery">
        <img
          src="https://plus.unsplash.com/premium_photo-1663050763436-818382a24bb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gallery"
        />
        <img
          src="https://images.unsplash.com/photo-1706969151544-dfefd704a3b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gallery"
        />
        <img
          src="https://images.unsplash.com/photo-1636393853624-2fce2206c9d4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gallery"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gallery"
        />
      </div>
      <button className="btn">See More👍</button>
    </div>
  );
};

export default Campus;
