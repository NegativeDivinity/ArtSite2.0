import React from "react";
import { Link } from "react-router-dom";
import "./body.css";

export default function Body() {
  return (
    <div className="h-wrap">
      <div className="banner">
        <h1> Welcome to Shitty Art </h1>
        <h3> Proceed with Caution! </h3>
      </div>
      <div className="banner-button">
        <div className="b-two">
          <Link to="/gallery">To Gallery</Link>
          <h4>Are you sure?</h4>
        </div>
      </div>
    </div>
  );
}
