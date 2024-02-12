import React, { useEffect } from 'react';
import { PaperScope, Path, Point } from 'paper';

const RandomShapes = () => {
  useEffect(() => {
    // Create a Paper.js scope
    const paper = new PaperScope();

    // Get the canvas element
    const canvas = document.getElementById('myCanvas');

    // Activate the Paper.js scope on the canvas
    paper.setup(canvas);

    // Create random shapes
    const createRandomShapes = () => {
      const numShapes = Math.floor(Math.random() * 5) + 1; // Random number of shapes (1 to 5)
      for (let i = 0; i < numShapes; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 50 + 10; // Random radius (10 to 60)
        const sides = Math.floor(Math.random() * 7) + 3; // Random number of sides (3 to 9)
        const fillColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        // Create a random shape
        const shape = new Path.RegularPolygon(new Point(x, y), sides, radius);
        shape.fillColor = fillColor;
      }
    };

    // Call the function to create random shapes
    createRandomShapes();
  }, []);

  return (
    <canvas id="myCanvas" width={800} height={600} style={{ border: '1px solid black' }}>
      Your browser does not support the HTML5 canvas tag.
    </canvas>
  );
};

export default RandomShapes;