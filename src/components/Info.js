import React from "react";
import "../App.css";
import "./portfolio.scss";
import shreejwalImage from "../images/shreejwal_profile.jpg";

import { useHistory } from "react-router-dom";

export default function Info() {
  const history = useHistory();

  return (
    <div className="App">
      <header onClick={() => history.push("/home")} className="header-back">
        {"<- Back"}
      </header>

      <a
        className="info-div"
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.instagram.com/shreejwaldhakal/"}
      >
        <img
          src={shreejwalImage}
          alt="profile pic"
          className="shreejwal-image-info"
        ></img>
        <span className="handle-span">@shreejwaldhakal</span>
      </a>
    </div>
  );
}
