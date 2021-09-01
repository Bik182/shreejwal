import React from "react";
import { useHistory } from "react-router-dom";
import "./portfolio.scss";

export default function Entrance() {
  const history = useHistory();

  return (
    <div className="entrance-background">
   
       <span onClick={() => history.push("/home")}className="entrance-text"> ENTER SITE</span>
     
    </div>
  );
}
