import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ImageTrail from './ImageTrail';
import './Intro.css';

import img1 from '../assets/WhatsApp Image 2026-01-12 at 02.05.20.jpeg';
import img2 from '../assets/WhatsApp Image 2026-01-12 at 02.05.21.jpeg';
import img3 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22 (1).jpeg';
import img4 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22 (2).jpeg';
import img5 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22.jpeg';
import img6 from '../assets/WhatsApp Image 2026-01-12 at 02.07.57.jpeg';

const Intro = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const scrollHintRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        const words = textRef.current.querySelectorAll('.word');

        // Initial state
        gsap.set(words, {
            y: 30,
            opacity: 0,
            filter: 'blur(10px)'
        });

        gsap.set(scrollHintRef.current, { opacity: 0 });

        // Animation sequence
        tl.to(words, {
            duration: 1.5,
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.25,
            ease: 'power3.out'
        })
            .to(scrollHintRef.current, {
                duration: 1.5,
                opacity: 1,
                ease: "sine.inOut"
            }, "-=0.5");

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section id="intro" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Creative Background: ImageTrail Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <ImageTrail
                    items={[img1, img2, img3, img4, img5, img6]}
                    variant={1}
                />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="intro-content">
                    <div ref={textRef} className="intro-text-wrapper">
                        <div className="intro-row">
                            <span className="word">Some</span>
                            <span className="word">things</span>
                            <span className="word">aren't</span>
                        </div>
                        <div className="intro-row">
                            <span className="word">meant</span>
                            <span className="word">to</span>
                            <span className="word">be</span>
                        </div>
                        <div className="intro-row">
                            <span className="word highlight-word">rushed.</span>
                        </div>
                        <span className="hover-hint-text">Hover to feel the vibe</span>
                    </div>
                </div>
            </div>

            <div className="scroll-hint" ref={scrollHintRef} style={{ zIndex: 2 }}>
                <span>Begin our story</span>
            </div>
        </section>
    );
};

export default Intro;
