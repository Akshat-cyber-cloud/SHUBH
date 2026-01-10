import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader = ({ showLoader }) => {
    const containerRef = useRef(null);
    const wordsRef = useRef(null);

    useEffect(() => {
        if (showLoader && wordsRef.current) {
            const tl = gsap.timeline();
            const words = wordsRef.current.children;

            // Initial hide
            gsap.set(words, { y: 50, opacity: 0 });

            // Animate words in and out
            tl.to(words[0], { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                .to(words[0], { y: -50, opacity: 0, duration: 0.8, ease: "power3.in" }, "+=0.2")

                .to(words[1], { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                .to(words[1], { y: -50, opacity: 0, duration: 0.8, ease: "power3.in" }, "+=0.2")

                .to(words[2], { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
                .to(words[2], { y: -50, opacity: 0, duration: 0.8, ease: "power3.in" }, "+=0.2");
        }
    }, [showLoader]);

    if (!showLoader) return null;

    return (
        <div id="loader" ref={containerRef}>
            <div className="loader-content" ref={wordsRef}>
                <h1>MOMENTS</h1>
                <h1>MEMORIES</h1>
                <h1>FOREVER</h1>
            </div>
        </div>
    );
};

export default Loader;
