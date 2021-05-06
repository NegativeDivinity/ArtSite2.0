import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <div className="footerBody">
      <div className="footer">
        <div className="footerLeft">
          <div className="logo">
            <h2>Shitty Art</h2>
          </div>
          <div className="copyrightInfo">
            <div className="copyrightTogether">
              <div className="copyrightIcon">
                <CopyrightIcon className="fb" />
              </div>
              <div className="copyrightLogo">
                <p> 2021 Shitty Art</p>
              </div>
            </div>
            <div className="rights">
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="footerMid">
          <h3>
            <Link to="/gallery">Gallery</Link>
          </h3>
          <h3>
            <Link to="/commissions">Commissions</Link>
          </h3>
          <h3>
            <Link to="/about">About</Link>
          </h3>
        </div>
        <div className="socialMedia">
          <a href="https://www.facebook.com/Shi77yArtist">
            <FacebookIcon className="fa" />
          </a>
          <a href="https://twitter.com/ShittyArtist9">
            <TwitterIcon className="fa" />
          </a>
          <a href="https://www.instagram.com/shi77yartist/">
            <InstagramIcon className="fa" />
          </a>
        </div>
      </div>
    </div>
  );
}
