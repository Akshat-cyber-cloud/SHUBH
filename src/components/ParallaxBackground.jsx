import React, { useEffect, useRef } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrolled = window.scrollY;
                const rate = scrolled * -0.5;
                bgRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="parallax-bg" id="parallaxBg" ref={bgRef}></div>;
};

export default ParallaxBackground;
