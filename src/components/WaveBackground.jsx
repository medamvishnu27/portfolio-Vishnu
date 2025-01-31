import React, { useEffect } from 'react';
import './WaveBackground.css';

const WaveBackground = () => {
  useEffect(() => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];
    const shapes = document.querySelectorAll('.shape');
    
    const animateShapes = () => {
      shapes.forEach((shape, index) => {
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size between 100px and 300px
        const size = Math.random() * 500 + 100;
        
        // Random color from our palette
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Random rotation
        const rotation = Math.random() * 360;
        
        // Apply transformations
        shape.style.transform = `translate(${x}vw, ${y}vh) rotate(${rotation}deg)`;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.backgroundColor = color;
      });
    };

    // Initial animation
    animateShapes();

    // Animate every 3 seconds
    const interval = setInterval(animateShapes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wave-background">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="shape" />
      ))}
    </div>
  );
};

export default WaveBackground;
