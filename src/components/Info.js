import React from "react";
import "../App.css";
import "./portfolio.css";

import { useHistory } from "react-router-dom";

export default function Info() {
  const history = useHistory();

  return (
    <div className="App">
      <header className="header-title">Info</header>
      <header  onClick={() => history.push("/")} className="header-back">{"<- Back"}</header>

    </div>
  );
}
