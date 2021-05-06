import React from "react";
import "./body.css";

// Images
import Mcnasty from "../assets/McNasty.JPG";
import Aang from "../assets/aang.JPG";
import Bakugo from "../assets/bakugo.JPG";
import Bird from "../assets/bird.JPG";
import Ghoul from "../assets/ghoul.JPG";
import Girl from "../assets/girl.JPG";
import Heart from "../assets/heart.JPG";
import Izuku from "../assets/izuku.JPG";
import Pink from "../assets/pinkHair.JPG";
import Sadgirl from "../assets/sadGirl.JPG";
import Sadnasty from "../assets/sadMcNasty.JPG";
import Sadwomen from "../assets/sadWomen.JPG";
import Sadd from "../assets/sadd.JPG";
import Snake from "../assets/snake.JPG";

export default function Body() {
  return (
    <div className="g-wrap">
      <div className="g-head">
        <h1>Gallery</h1>
      </div>
      <div className="cards">
        <div className="card">
          <img src={Mcnasty} alt="drawing of McNasty" />
          <div className="c-description">
            <h2> McNasty </h2>
            <p>
              {" "}
              This drawing is a portrait of the youtuber McNasty's persona.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Aang} alt="drawing of Aang from Avatar" />
          <div className="c-description">
            <h2> Aang </h2>
            <p>
              {" "}
              This drawing is a portrait of the character Aang fron Avatar: The
              last airbender.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Bakugo} alt="drawing of Bakugo from My Hero Academia" />
          <div className="c-description">
            <h2> Bakugo </h2>
            <p>
              {" "}
              This is a drawing of the animated character Bakugo from the anime
              My Hero Academia.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Bird} alt="drawing of Dove" />
          <div className="c-description">
            <h2> Dove </h2>
            <p> The drawing seen here is of a dove flying. </p>
          </div>
        </div>
        <div className="card">
          <img src={Ghoul} alt="drawing of Tokyo Ghoul" />
          <div className="c-description">
            <h2> Ken Kaneki </h2>
            <p>
              {" "}
              This colored drawing depicts the main character of Tokyo Ghoul,
              Ken Kaneki.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Girl} alt="drawing of a Girl" />
          <div className="c-description">
            <h2> Girl </h2>
            <p>
              {" "}
              This drawing is of a girl looking back over her shoulder, but at
              What?{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Heart} alt="drawing of a realistic heart" />
          <div className="c-description">
            <h2> Promises </h2>
            <p>
              {" "}
              The unique drawing depicts a heart, not just any heart, but a
              realistic heart. The text states "Pinky Promise, I love you". What
              is the artist trying to say?{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Izuku} alt="drawing of Izuku from My Hero Academia" />
          <div className="c-description">
            <h2> Izuku </h2>
            <p>
              {" "}
              This is a drawing of the afamed main character of My Hero
              Academia, Izuku Midoriya.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Pink} alt="drawing of a guy with pink hair" />
          <div className="c-description">
            <h2> Sad Girl </h2>
            <p> Drawing of a girl holding a doll crying. </p>
          </div>
        </div>
        <div className="card">
          <img src={Sadgirl} alt="drawing of girl crying" />
          <div className="c-description">
            <h2> Sad Girl </h2>
            <p> Drawing of a girl holding a doll crying. </p>
          </div>
        </div>
        <div className="card">
          <img src={Sadnasty} alt="drawing of McNasty crying" />
          <div className="c-description">
            <h2> Sad McNasty </h2>
            <p>
              {" "}
              This is a drawing of the famous youtuber McNasty's persona , who
              seems beaten and sad.{" "}
            </p>
          </div>
        </div>
        <div className="card">
          <img src={Sadwomen} alt="drawing of a women crying" />
          <div className="c-description">
            <h2> Sad </h2>
            <p> This drawing is a women crouched on the floor crying. </p>
          </div>
        </div>
        <div className="card">
          <img src={Sadd} alt="drawing of girl crying" />
          <div className="c-description">
            <h2> Crying </h2>
            <p> Depicts a women crying. </p>
          </div>
        </div>
        <div className="card">
          <img src={Snake} alt="drawing of cobra" />
          <div className="c-description">
            <h2> Cobra </h2>
            <p> The drawing depicts a snake more accurately a cobra. </p>
          </div>
        </div>
      </div>
    </div>
  );
}
