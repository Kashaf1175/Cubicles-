
import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const numBubbles = 60; // Number of bubbles to generate
      const bubbleArray = [];

      for (let i = 0; i < numBubbles; i++) {
        const size = Math.random() * 30 + 10; // Random bubble size between 10px and 40px
        const x = Math.random() * 500; // Random x position
        const y = Math.random() * 500; // Random y position
        const z = Math.random() * 2000; // Random z position (depth)
        const color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Random color

        bubbleArray.push({
          size,
          x,
          y,
          z,
          color,
          animationDelay: -Math.random() * 3 + 's', // Random animation delay
        });
      }

      setBubbles(bubbleArray); // Update the state with the generated bubbles
    };

    generateBubbles(); // Call the function on component mount
  }, []);
    
  return (
    <div className="loader-container">
      <div className="bubble-wrap">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              transform: `translate3d(${bubble.x}px, ${bubble.y}px, ${bubble.z}px)`,
              backgroundColor: bubble.color,
              animationDelay: `${bubble.animationDelay}`,
            }}
          />
        ))}
      </div>
    </div>

  );
}

export default Loader;
