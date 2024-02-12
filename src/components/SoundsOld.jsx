import React, { useEffect, useState } from "react";
import ReactHowler from "react-howler";

import bubbles from "../assets/sounds/bubbles.mp3";
import clay from "../assets/sounds/clay.mp3";
import confetti from "../assets/sounds/confetti.mp3";
import corona from "../assets/sounds/corona.mp3";
import spiral from "../assets/sounds/dotted-spiral.mp3";
import flash1 from "../assets/sounds/flash-1.mp3";
import flash2 from "../assets/sounds/flash-2.mp3";
import flash3 from "../assets/sounds/flash-3.mp3";
import glimmer from "../assets/sounds/glimmer.mp3";
import moon from "../assets/sounds/moon.mp3";
import pinwheel from "../assets/sounds/pinwheel.mp3";
import piston1 from "../assets/sounds/piston-1.mp3";
import piston2 from "../assets/sounds/piston-2.mp3";
import piston3 from "../assets/sounds/piston-3.mp3";
import prism1 from "../assets/sounds/prism-1.mp3";
import prism2 from "../assets/sounds/prism-2.mp3";
import prism3 from "../assets/sounds/prism-3.mp3";
import splits from "../assets/sounds/splits.mp3";
import squiggle from "../assets/sounds/squiggle.mp3";
import strike from "../assets/sounds/strike.mp3";
import suspension from "../assets/sounds/suspension.mp3";
import timer from "../assets/sounds/timer.mp3";
import ufo from "../assets/sounds/ufo.mp3";
import veil from "../assets/sounds/veil.mp3";
import wipe from "../assets/sounds/wipe.mp3";
import zigZag from "../assets/sounds/zig-zag.mp3";

const a = "linear-gradient(to right, #4ac29a, #bdfff3)";
const b = "linear-gradient(to right, #bdc3c7, #2c3e50)";
const c = "linear-gradient(to right, #ee9ca7, #ffdde1)";
const d = "linear-gradient(to right, #2193b0, #6dd5ed)";
const e = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
const f = "linear-gradient(to right, #0f2027, #203a43, #2c5364)";
const g = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
const h = "linear-gradient(to right, #b92b27, #1565c0)";
const i = "linear-gradient(to right, #373b44, #4286f4)";
const j = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
const k = "linear-gradient(to right, #000000, #0f9b0f)";
const l = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
const m = "linear-gradient(to right, #1e130c, #9a8478)";
const n = "linear-gradient(to left, #000000, #e74c3c)";
const o = "linear-gradient(to left, #16a085, #f4d03f)";
const p = "linear-gradient(to left, #00416a, #799f0c, #ffe000)";
const q = "linear-gradient(to left, #bbd2c5, #536976, #292e49";
const r = "linear-gradient(to left, #ff6e7f, #bfe9ff)";
const s = "linear-gradient(to left, #1d2b64, #f8cdda)";
const t = "linear-gradient(to left, #ed4264, #ffedbc)";
const u = "linear-gradient(to left, #fbd3e9, #bb377d)";
const v = "linear-gradient(to left, #780206, #061161)";
const w = "linear-gradient(to left, #8e0e00, #1f1c18)";
const x = "linear-gradient(to left, #2f7336, #aa3a38)";
const y = "linear-gradient(to left, #000000, #434343)";
const z = "linear-gradient(to left, #a80077, #66ff00)";

function SoundsOld() {
  const [sound, setSound] = useState(bubbles);
  const [playing, setPlaying] = useState(false);
  const [background, setBackground] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showing, setShowing] = useState(true);
  const animations = [
    "animate-left",
    "animate-up",
    "animate-right",
    "animate-down",
    "animate-size",
  ];

  const handleKeyPress = (e) => {
    setPlaying(true);
    setAnimate(true);
    setShowing(false);

    setTimeout(() => {
      setAnimate(false);
    }, 1000);

    if (e.keyCode === 65) {
      setSound(bubbles);
      setBackground(a);
    }

    if (e.keyCode === 66) {
      setSound(clay);
      setBackground(b);
    }

    if (e.keyCode === 67) {
      setSound(confetti);
      setBackground(c);
    }

    if (e.keyCode === 68) {
      setSound(corona);
      setBackground(d);
    }

    if (e.keyCode === 69) {
      setSound(spiral);
      setBackground(e);
    }

    if (e.keyCode === 70) {
      setSound(flash1);
      setBackground(f);
    }

    if (e.keyCode === 71) {
      setSound(flash2);
      setBackground(g);
    }

    if (e.keyCode === 72) {
      setSound(flash3);
      setBackground(h);
    }

    if (e.keyCode === 73) {
      setSound(glimmer);
      setBackground(i);
    }

    if (e.keyCode === 74) {
      setSound(moon);
      setBackground(j);
    }

    if (e.keyCode === 75) {
      setSound(pinwheel);
      setBackground(k);
    }

    if (e.keyCode === 76) {
      setSound(piston1);
      setBackground(l);
    }

    if (e.keyCode === 77) {
      setSound(piston2);
      setBackground(m);
    }

    if (e.keyCode === 78) {
      setSound(piston3);
      setBackground(n);
    }

    if (e.keyCode === 79) {
      setSound(prism1);
      setBackground(o);
    }

    if (e.keyCode === 80) {
      setSound(prism2);
      setBackground(p);
    }

    if (e.keyCode === 81) {
      setSound(prism3);
      setBackground(q);
    }

    if (e.keyCode === 82) {
      setSound(splits);
      setBackground(r);
    }

    if (e.keyCode === 83) {
      setSound(squiggle);
      setBackground(s);
    }

    if (e.keyCode === 84) {
      setSound(strike);
      setBackground(t);
    }

    if (e.keyCode === 85) {
      setSound(suspension);
      setBackground(u);
    }

    if (e.keyCode === 86) {
      setSound(timer);
      setBackground(v);
    }

    if (e.keyCode === 87) {
      setSound(ufo);
      setBackground(w);
    }

    if (e.keyCode === 88) {
      setSound(veil);
      setBackground(x);
    }

    if (e.keyCode === 89) {
      setSound(wipe);
      setBackground(y);
    }

    if (e.keyCode === 90) {
      setSound(zigZag);
      setBackground(z);
    }
  };

  return (
    <div
      onKeyDown={handleKeyPress}
      tabIndex={0}
      style={{ background: background }}
      className={
        animate
          ? `${
              animations[Math.floor(Math.random() * animations.length)]
            } container`
          : "container"
      }
    >
      {showing && (
        <p className="message">
          Press any key, A to Z or tap and turn up speakers
        </p>
      )}
      <ReactHowler src={sound} playing={playing} volume={1.0} />
    </div>
  );
}

export default SoundsOld;
