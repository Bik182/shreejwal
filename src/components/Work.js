import React from "react";
import "../App.css";
import "./portfolio.css";

import images from "./images.js";
import { useHistory } from "react-router-dom";

export default function Work() {
  const history = useHistory();

  return (
    <div className="App">
      <header className="header-title">Work</header>
      <header  onClick={() => history.push("/")} className="header-back">{"<- Back"}</header>
      <div className="work-wrapper">
      <div className="work-div">
        {images.map((image, index) => {
          
          return (
          
            <img
              style={{ backgroundColor: "transparent" }}
              key={index}
              className="work-image"
              src={image.default}
              alt="work images"
            ></img>
          );
        })}
      </div>
      </div>
    </div>
  );
}
