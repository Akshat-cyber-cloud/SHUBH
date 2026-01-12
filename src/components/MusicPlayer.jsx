import React, { useState, useEffect, useRef } from 'react';
import bgMusic from '../assets/bg-music.mp3';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(0.7);
    const visualizerRef = useRef(null);
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        // Create visualizer bars
        if (visualizerRef.current) {
            visualizerRef.current.innerHTML = ''; // clear
            for (let i = 0; i < 64; i++) {
                const bar = document.createElement('div');
                bar.className = 'visualizer-bar';
                bar.style.left = (i / 64 * 100) + '%';
                bar.style.height = (Math.random() * 50 + 10) + 'px';
                bar.style.animationDelay = (Math.random() * 0.5) + 's';
                visualizerRef.current.appendChild(bar);
            }
        }

        // Animate bars
        const interval = setInterval(() => {
            if (visualizerRef.current && isPlaying) {
                const bars = visualizerRef.current.querySelectorAll('.visualizer-bar');
                bars.forEach(bar => {
                    const randomHeight = Math.random() * 80 + 20;
                    bar.style.height = randomHeight + 'px';
                });
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        const attemptPlay = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => {
                    console.error("Autoplay force-blocked:", e);
                    setIsPlaying(false);
                    setIsBlocked(true); // Show overlay
                });
            }
        };

        // Attempt play on mount
        attemptPlay();

        // Add visual interaction listener to retry play if blocked
        const handleInteraction = () => {
            attemptPlay();
            // Once played, we can remove the listeners to avoid spamming play()
            if (audioRef.current && !audioRef.current.paused) {
                document.removeEventListener('click', handleInteraction);
                document.removeEventListener('scroll', handleInteraction);
            }
        };

        const handleAudioControl = (e) => {
            const { action } = e.detail;
            if (action === 'pause') {
                setIsPlaying(false);
            } else if (action === 'play') {
                setIsPlaying(true);
            }
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('scroll', handleInteraction);
        document.addEventListener('audio-control', handleAudioControl);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('audio-control', handleAudioControl);
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            if (isPlaying) {
                // Try catch in case interruption
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Play interrupted or failed:", error);
                        setIsPlaying(false);
                    });
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, volume]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <section id="music">
            {/* Force Interaction Overlay if blocked */}
            {isBlocked && (
                <button
                    className="enable-music-btn"
                    onClick={() => {
                        if (audioRef.current) {
                            audioRef.current.play();
                            setIsPlaying(true);
                            setIsBlocked(false);
                        }
                    }}
                >
                    Enable Experience
                </button>
            )}
            <div className="container">
                <div className="music-container">
                    <h2 className="headline">Our Eternal Melody</h2>
                    <p className="medium-text" style={{ marginTop: '1rem', opacity: 0.7 }}>The soundtrack of our love</p>

                    <div className="music-player glass-card" style={{ padding: '2rem', marginTop: '2rem' }}>
                        <div className="music-visualizer" id="visualizer" ref={visualizerRef}></div>
                        <div className="player-controls" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                            <button className="player-btn glass-card" onClick={togglePlay} style={{ padding: '0.5rem 1.5rem', cursor: 'pointer', border: 'none', color: 'var(--off-white)' }}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <button className="player-btn glass-card" style={{ padding: '0.5rem 1.5rem', cursor: 'pointer', border: 'none', color: 'var(--off-white)' }}>
                                Next
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                style={{ width: '150px' }}
                            />
                        </div>
                        <audio ref={audioRef} loop playsInline>
                            <source src={bgMusic} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MusicPlayer;
