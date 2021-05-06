import React from "react";
import "./body.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Body() {
  return (
    <div className="c-wrap">
      <div className="c-head">
        <h1> Contact </h1>
      </div>
      <div className="contact">
        <div className="c-price">
          <div className="price-head">
            <h2> Prices </h2>
          </div>
          <div className="prices">
            <div className="product">
              <p> Lorem Ipsum: </p>
              <p> Lorem Ipsum: </p>
              <p> Lorem Ipsum: </p>
              <p> Lorem Ipsum: </p>
              <p> Lorem Ipsum: </p>
              <p> Lorem Ipsum: </p>
            </div>
            <div className="product-price">
              <p> $10 </p>
              <p> $10 </p>
              <p> $10 </p>
              <p> $10 </p>
              <p> $10 </p>
              <p> $10 </p>
            </div>
          </div>
        </div>
        <div className="c-form">
          <form>
            <h2> Contact Form </h2>
            <h4> Via Email </h4>
            <div className="form-name">
              <input name="name" type="text" placeholder="Name"></input>
            </div>
            <div className="form-email">
              <input name="email" type="text" placeholder="Email"></input>
            </div>
            <div className="form-text">
              <textarea cols="17" rows="4" placeholder="Message..."></textarea>
            </div>
            <div className="sub-button">
              <button type="submit">Send</button>
            </div>
            <div className="form-social">
              <h4> - or - </h4>
              <div className="form-socials">
                <a href="https://www.facebook.com/Shi77yArtist">
                  <FacebookIcon className="fc one" />
                </a>
                <a href="https://twitter.com/ShittyArtist9">
                  <TwitterIcon className="fc two" />
                </a>
                <a href="https://www.instagram.com/shi77yartist/">
                  <InstagramIcon className="fc three" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
