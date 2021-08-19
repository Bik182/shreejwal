import React from "react";
import "../App.css";
import "./portfolio.css";
import { useHistory } from "react-router-dom";

import Portfolio from "./Portfolio";

import shreejwalImage from "../images/profile_1.jpg";

import guitarOutline1 from "../outlines/main_1_outline.png";
import guitarMain1 from "../images/main_1.jpg";

import drumOutline from "../outlines/main_3_outline.png";
import drumMain from "../images/main_3.jpg";

import guitarOutline2 from "../outlines/main_5_outline.png";
import guitarMain2 from "../images/main_5.jpg";

import shreejOutline1 from "../outlines/sec_3_outline.png";
import shreejMain1 from "../images/sec_3.jpg";

import shreejOutline2 from "../outlines/sec_1_outline.png";
import shreejMain2 from "../images/sec_1.jpg";

import shreejOutline3 from "../outlines/sec_4_outline.png";
import shreejMain3 from "../images/sec_4.jpg";
export default function Home(props) {
  const history = useHistory();

  return (
    <div className="App">
      <div className="nav-header">
        <header className="header-title">SHRJWL</header>{" "}
        <header onClick={() => history.push("/work")} className="nav-button">
          Work
        </header>{" "}
        <header onClick={() => history.push("/info")} className="nav-button">
          Info
        </header>
      </div>

      <div className="nav-bar">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://www.instagram.com/shreejwaldhakal/"}
        >
          <img src={shreejwalImage} alt="profile pic" className="shreejwal-image"></img>
        </a>
      </div>
      <div className="port-group">
        <Portfolio
          mainImage={guitarMain1}
          outlineImage={guitarOutline1}
          color={"rgb(6, 140, 209)"}
        ></Portfolio>
        <Portfolio
          mainImage={guitarMain2}
          outlineImage={guitarOutline2}
          color={"rgb(6, 140, 209)"}
        ></Portfolio>
        <Portfolio
          mainImage={drumMain}
          outlineImage={drumOutline}
          color={"rgb(6, 140, 209)"}
        ></Portfolio>
      </div>
      <div className="port-group">
        <Portfolio
          mainImage={shreejMain1}
          outlineImage={shreejOutline1}
          color={"rgb(165, 74, 40)"}
        ></Portfolio>
        <Portfolio
          mainImage={shreejMain2}
          outlineImage={shreejOutline2}
          color={"rgb(165, 74, 40)"}
        ></Portfolio>
        <Portfolio
          mainImage={shreejMain3}
          outlineImage={shreejOutline3}
          color={"rgb(165, 74, 40)"}
        ></Portfolio>
      </div>
    </div>
  );
}
