import React, { useState } from "react";
import "./portfolio.scss";
export default function Portfolio(props) {
  return (
    <div className="port-div">
      <div className="image-div">
        <img
          style={{ backgroundColor: "transparent" }}
          className="outline-image"
          src={props.outlineImage}
          alt="outline image"
        ></img>
        <div className="image-div-main">
          <img
            style={{ backgroundColor: props.color }}
            className="main-image"
            alt="main image"
            src={props.mainImage}
          ></img>
        </div>
      </div>
    </div>
  );
}
