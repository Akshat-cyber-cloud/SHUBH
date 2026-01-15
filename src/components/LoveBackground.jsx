import React, { useEffect, useState } from 'react';
import './LoveBackground.css';

const LoveBackground = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const emojis = ['❤️', '💖', '💘', '💝', '🌹', '✨', '🥰', '😍'];
        const heartCount = 20; // Number of floating items
        const newHearts = [];

        for (let i = 0; i < heartCount; i++) {
            newHearts.push({
                id: i,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
                left: Math.random() * 100, // Random horizontal position
                animationDuration: 6 + Math.random() * 10, // Random speed (6-16s)
                delay: Math.random() * 5, // Random start delay
                fontSize: 1 + Math.random() * 2 // Random size (1rem - 3rem)
            });
        }
        setHearts(newHearts);
    }, []);

    return (
        <div className="love-background">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        animationDuration: `${heart.animationDuration}s`,
                        animationDelay: `${heart.delay}s`,
                        fontSize: `${heart.fontSize}rem`
                    }}
                >
                    {heart.emoji}
                </div>
            ))}
        </div>
    );
};

export default LoveBackground;
