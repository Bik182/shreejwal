import React from "react";
import "../App.css";
import "./portfolio.scss";

import images from "./images.js";

export default function Work() {
  return (
    <div className="work-wrapper">
      <div className="work-div">
        {images.map((image, index) => {
          return (
            <img
             
              key={index}
              className="work-image fade-in"
              src={image.default}
              alt="work images"
            ></img>
            // <div className="work-temp">
            // </div>
          );
        })}
      </div>
    </div>
  );
}
