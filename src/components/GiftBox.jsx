import React, { useState, useRef, useEffect } from 'react';
import './GiftBox.css';
import giftVideo from '../assets/gift_video.mp4';

const GiftBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleOpen = () => {
        setIsOpen(true);
        // Delay playing slightly to allow modal animation
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => console.log("Autoplay prevented:", e));
            }
        }, 500);
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsPlaying(false);
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section id="gift-box-section">
            <h2 className="gift-title">A Special Surprise</h2>
            <p className="gift-subtitle">Tap to open</p>

            <div className="gift-container" onClick={handleOpen}>
                <div className="gift-box">
                    🎁
                </div>
            </div>

            {isOpen && (
                <div className="video-modal-overlay" onClick={handleClose}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>

                        <div className="video-wrapper" onClick={togglePlay}>
                            <video ref={videoRef} className="gift-video" loop playsInline>
                                <source src={giftVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Custom Play Button Overlay */}
                            <div className={`video-controls ${isPlaying ? 'playing' : ''}`}>
                                <div className="play-button">
                                    {isPlaying ? '⏸' : '▶'}
                                </div>
                            </div>
                        </div>

                        <button className="close-btn" onClick={handleClose}>Close</button>
                        <p className="video-caption">Just for you...</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GiftBox;
