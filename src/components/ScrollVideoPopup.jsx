import React, { useState, useEffect, useRef } from 'react';
import './ScrollVideoPopup.css';

import scrollVideo from '../assets2/scroll_video.mp4';

const ScrollVideoPopup = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // Track actual video playback state for overlay visibility
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    // Use useRef to track if video has played to avoid re-render dependency loops.
    // Initialized to false so it resets on every page reload, satisfying the user's request.
    const hasPlayedRef = useRef(false);
    const triggerRef = useRef(null);
    const videoRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        // If already played (in current mount), don't set up observer
        if (hasPlayedRef.current) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasPlayedRef.current) {
                    setIsPlaying(true);
                    hasPlayedRef.current = true;
                    // No storage setItem needed - we want it to reset on reload

                    // Disconnect immediately after triggering
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (triggerRef.current) {
            observerRef.current.observe(triggerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        if (isPlaying) {
            document.body.style.overflow = 'hidden'; // Lock scroll
            // Dispatch event to pause background music
            const event = new CustomEvent('audio-control', { detail: { action: 'pause' } });
            document.dispatchEvent(event);

            if (videoRef.current) {
                // We don't rely only on this promise for state, but on events
                videoRef.current.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                    // Handle autoplay blocking if necessary (e.g. show a play button)
                    setIsVideoPlaying(false);
                });
            }
        } else {
            document.body.style.overflow = 'unset'; // Unlock scroll
            // Dispatch event to resume background music (only if it was paused by this)
            // Ideally MusicPlayer handles the state, but we send 'play' signal
            const event = new CustomEvent('audio-control', { detail: { action: 'play' } });
            document.dispatchEvent(event);
            setIsVideoPlaying(false); // Reset internal state
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPlaying]);

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            {/* Invisible trigger element in the document flow */}
            <div
                ref={triggerRef}
                style={{
                    height: '1px',
                    width: '100%',
                    marginBottom: '50px' // Add some space so it triggers naturally after the section
                }}
            ></div>

            {/* Full screen video overlay */}
            <div className={`video-popup-overlay ${isPlaying ? 'active' : ''}`}>
                {isPlaying && (
                    <div className="video-container">
                        <video
                            ref={videoRef}
                            className="popup-video"
                            onEnded={handleVideoEnded}
                            onPlay={() => setIsVideoPlaying(true)}
                            onPause={() => setIsVideoPlaying(false)}
                            playsInline
                            autoPlay
                        // Removed muted to allow sound, user requested background music stop
                        >
                            <source src={scrollVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            className="skip-button"
                            onClick={() => setIsPlaying(false)}
                        >
                            Skip
                        </button>

                        {/* Fallback Play Button if Autoplay is Blocked */}
                        <div
                            className="play-overlay"
                            style={{
                                display: isVideoPlaying ? 'none' : 'flex'
                            }}
                            onClick={() => {
                                if (videoRef.current) {
                                    videoRef.current.play();
                                    // Force update to hide button
                                    const event = new CustomEvent('audio-control', { detail: { action: 'pause' } });
                                    document.dispatchEvent(event);
                                }
                            }}
                        >
                            <div className="play-icon">▶</div>
                            <p>Watch Our Story</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ScrollVideoPopup;
