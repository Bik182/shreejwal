import React, { useState } from "react";
import "./portfolio.scss";
export default function Portfolio(props) {
  return (
    <div className="port-div">
      <div className="image-div">
        <img
          className="main-image"
          alt="main image"
          src={props.mainImage}
        ></img>
      </div>
    </div>
  );
}
