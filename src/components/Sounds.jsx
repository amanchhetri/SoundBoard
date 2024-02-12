import React, { useRef, useEffect, useState } from "react";
import paper from "paper";
// import ReactHowler from "react-howler";
import { keyData } from "./soundTrack";
import bubbles from "../assets/sounds/bubbles.mp3";
import ReactAudioPlayer from "react-audio-player";

const Sounds = () => {
  const canvasRef = useRef(null);
  const [sound, setSound] = useState(bubbles);
  //   const [playing, setPlaying] = useState(false);
  const [soundKey, setSoundKey] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const circles = [];
    // Initialize Paper.js
    paper.setup(canvasRef.current);

    // Event listener for key press
    const onKeyDown = (event) => {
      if (keyData[event.key]) {
        // setPlaying(true);
        setShowText(false);
        drawRandomCircle();
        setSound(keyData[event.key].sound);
        setSoundKey((prevKey) => prevKey + 1);
      }
    };

    // Attach keydown event listener to the document
    document.addEventListener("keydown", onKeyDown);

    // Function to draw a random circle
    const drawRandomCircle = () => {
      const randomPoint = new paper.Point(
        Math.random() * paper.view.size.width,
        Math.random() * paper.view.size.height
      );
      const circle = new paper.Path.Circle(randomPoint, 400);
      circle.fillColor = new paper.Color(
        Math.random(), // Random red value
        Math.random(), // Random green value
        Math.random() // Random blue value
      );
      circles.push(circle);
      fadeOutCircle(circle);
      //   paper.view.onFrame = (event) => {

      //     circle.fillColor.hue += 1;
      //     circle.scale(0.9);
      //   };
    };

    // Function to fade out a circle
    const fadeOutCircle = (circle) => {
      const animationDuration = 1000; // Duration of the animation in milliseconds
      const startTime = Date.now();

      const animationFrame = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Ensure progress doesn't exceed 1
        circle.opacity = 1 - progress; // Decrease opacity gradually
        circle.scale(0.9);
        // Continue the animation until the opacity reaches 0
        if (circle.opacity > 0) {
          requestAnimationFrame(animationFrame);
        } else {
          removeCircle(circle); // Remove the circle once the animation is complete
        }
      };

      // Start the animation
      animationFrame();
    };

    // Function to remove a circle from the canvas and the array
    const removeCircle = (circleToRemove) => {
      circleToRemove.remove(); // Remove the circle from the canvas
      const index = circles.indexOf(circleToRemove);
      if (index !== -1) {
        circles.splice(index, 1); // Remove the circle from the array
      }
    };

    // Cleanup function
    return () => {
      // Cleanup Paper.js
      paper.projects[0].remove();
      // Remove keydown event listener
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="canvasBox">
      {showText && (
        <div className="text">
          Press any key, A to Z and turn up the speakers
        </div>
      )}
      <canvas ref={canvasRef}>
        {/* <ReactHowler
          src={sound}
          playing={playing}
          onEnd={() => {
            setPlaying(false);
          }}
          volume={1.0}
          key={soundKey}
        /> */}
        <ReactAudioPlayer src={sound} autoPlay key={soundKey} />
      </canvas>
    </div>
  );
};

export default Sounds;
