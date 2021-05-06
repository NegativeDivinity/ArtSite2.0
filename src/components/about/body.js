import React from "react";
import "./body.css";

import Logo from "../assets/logo.JPG";

export default function Body() {
  return (
    <div className="a-wrap">
      <div className="a-head">
        <h1> About The Shitty Artist </h1>
      </div>
      <div className="about">
        <div className="a-img">
          <img src={Logo} alt="Shitty Art Logo" />
        </div>
        <div className="a-description">
          <p>
            {" "}
            I started drawing when I was about 15 years old. I was not very good
            at first but, I kept drawing. It was something I could do to get my
            mind off of things. It takes concentration, so I would be thinking
            of what I'm drawing and whatever comes out of it comes out. Art has
            really been a big part of my life and, I'm happy I get to share it
            with you guys.
          </p>
        </div>
      </div>
    </div>
  );
}
