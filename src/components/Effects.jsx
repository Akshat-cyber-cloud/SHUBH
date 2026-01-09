import React, { useEffect, useState } from 'react';
import './Effects.css';

const Effects = () => {
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '💞', '💘', '💝'];

    // Generate hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
      left: Math.random() * 100 + '%',
      fontSize: (Math.random() * 1.5 + 1) + 'rem',
      animationDelay: Math.random() * -20 + 's',
      opacity: Math.random() * 0.3 + 0.2
    }));
    setHearts(newHearts);

    // Generate sparkles
    const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDelay: Math.random() * 5 + 's'
    }));
    setSparkles(newSparkles);

    // Generate particles
    const newParticles = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      top: Math.random() * 100 + 'vh',
      animationDelay: Math.random() * -10 + 's',
      animationDuration: (Math.random() * 10 + 10) + 's'
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <div id="loveEffects">
        {hearts.map(heart => (
          <div key={heart.id} className="floating-heart" style={{
            left: heart.left,
            fontSize: heart.fontSize,
            animationDelay: heart.animationDelay,
            opacity: heart.opacity
          }}>
            {heart.symbol}
          </div>
        ))}
      </div>
      <div id="sparkles">
        {sparkles.map(sparkle => (
          <div key={sparkle.id} className="sparkle" style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.animationDelay
          }} />
        ))}
      </div>
      <div id="particles">
        {particles.map(particle => (
          <div key={particle.id} className="particle" style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
            animationDuration: particle.animationDuration
          }} />
        ))}
      </div>
    </>
  );
};

export default Effects;
