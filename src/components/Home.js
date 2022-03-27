import React, { useEffect, useState } from "react";
import "../App.css";
import "./portfolio.scss";
import "./dropdown.scss";
import "./modal.scss";
import Work from "./Work";
import Modal from "./Modal";
import shreejwalImage from "../images/profile_1.jpg";

export default function Home(props) {
  const [openModal, setModal] = useState(true);
   const switchModal = ()=>{
      return setModal(e => !e);
    }
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {};
   
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      console.log("Fader1", entries);
      entries.forEach((entry) => {
        console.log("Fader", entry);
        if (!entry.isIntersecting) {
          return;
        } else {
          console.log("entry", entry);
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      console.log("hey, ", fader);
      appearOnScroll.observe(fader, appearOnScroll);
    });
    return () => {
      faders.forEach((fader) => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);
  return (
    <div className="App">
      {/* <Modal switchModal={switchModal} showModal={openModal}></Modal> */}
      <div className="info-wrapper">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/shreejwaldhakal/"
          className="image-link"
        >
          <img
            alt="profile "
            src={shreejwalImage}
            className="shreejwal-image"
          ></img>
        </a>
        <div className="info-section">
          <span id="shreejwal-name-id" className="header-name">
            shreejwaldhakal
            <div id="drop-menu-id" className="drop-menu">
              Info stuff hehe
            </div>
          </span>

          <h1 className="header-description small">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores.
          </h1>
          <h1
            className="header-description small"
            
          >
            Et harum quidem rerum facilis est et expedita distinctio.
          </h1>
          <h1 className="header-description small">
            Nam libero tempore, cum soluta nobis est.
          </h1>
        </div>
        {/* <div className="info-section">
          <h1 className="header-title">Info </h1>
          <span className="header-description">@shreejwaldhakal</span>
        </div> */}
      </div>
      <Work></Work>
    </div>
  );
}
