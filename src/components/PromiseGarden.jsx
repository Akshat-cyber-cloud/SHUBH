import React, { useState, useEffect } from 'react';
import './PromiseGarden.css';

const PromiseGarden = () => {
    // Manually positioned for a balanced, aesthetic layout (Heart-ish / Natural cluster)
    const promises = [
        { text: "To always choose you", left: "30%", top: "20%", delay: "0s", color: "#ff9a9e" }, // Left Lobe
        { text: "To grow together", left: "70%", top: "20%", delay: "1s", color: "#fecfef" }, // Right Lobe
        { text: "To keep our love alive", left: "15%", top: "40%", delay: "0.5s", color: "#a18cd1" }, // Far Left
        { text: "To be your safe place", left: "85%", top: "40%", delay: "1.5s", color: "#fbc2eb" }, // Far Right
        { text: "To cherish every moment", left: "25%", top: "60%", delay: "2s", color: "#fad0c4" }, // Mid Left
        { text: "To build our future", left: "75%", top: "60%", delay: "0.8s", color: "#ffecd2" }, // Mid Right
        { text: "To never stop trying", left: "40%", top: "75%", delay: "1.2s", color: "#fcb69f" }, // Low Center
        { text: "To love you more each day", left: "60%", top: "75%", delay: "2.5s", color: "#84fab0" } // Low Center
    ];

    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleFlowerClick = (index) => {
        setActiveTooltip(prev => prev === index ? null : index);
    };

    return (
        <section id="promise-garden">
            <div className="container">
                <div className="garden-container">
                    <h2 className="headline">Our Promise Garden</h2>
                    <p className="medium-text" style={{ marginTop: '1rem', opacity: 0.7 }}>Pick a flower to reveal a promise</p>

                    <div className="garden-field">
                        {promises.map((promise, index) => (
                            <div
                                key={index}
                                className={`flower-wrapper ${activeTooltip === index ? 'bloomed' : ''}`}
                                style={{
                                    left: promise.left,
                                    top: promise.top,
                                    animationDelay: promise.delay
                                }}
                                onClick={() => handleFlowerClick(index)}
                            >
                                <svg
                                    className="flower-svg"
                                    viewBox="0 0 100 100"
                                    style={{ '--flower-color': promise.color }}
                                >
                                    {/* Stem */}
                                    <path d="M50,100 Q50,70 50,50" stroke="#4ade80" strokeWidth="2" fill="none" className="flower-stem" />

                                    {/* Leaves */}
                                    <path d="M50,80 Q30,70 30,80 Q40,90 50,80" fill="#4ade80" className="flower-leaf leaf-left" />
                                    <path d="M50,80 Q70,70 70,80 Q60,90 50,80" fill="#4ade80" className="flower-leaf leaf-right" />

                                    {/* Petals Group */}
                                    <g className="flower-petals">
                                        <path d="M50,50 Q30,20 50,10 Q70,20 50,50" className="petal p1" />
                                        <path d="M50,50 Q80,30 90,50 Q80,70 50,50" className="petal p2" />
                                        <path d="M50,50 Q70,80 50,90 Q30,80 50,50" className="petal p3" />
                                        <path d="M50,50 Q20,70 10,50 Q20,30 50,50" className="petal p4" />
                                        <circle cx="50" cy="50" r="10" fill="#fff7e6" className="flower-center" />
                                    </g>
                                </svg>

                                <div className={`promise-tooltip ${activeTooltip === index ? 'visible' : ''}`}>
                                    <p className="body-text">{promise.text}</p>
                                </div>
                            </div>
                        ))}

                        {/* Fireflies/Particles for atmosphere */}
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={`firefly-${i}`}
                                className="firefly"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${10 + Math.random() * 10}s`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromiseGarden;
