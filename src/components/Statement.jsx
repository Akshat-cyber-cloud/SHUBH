import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Statement.css';

const Statement = () => {
    const containerRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const lines = [line1Ref.current, line2Ref.current];

        // Initial state
        gsap.set(lines, {
            y: 50,
            opacity: 0,
            filter: 'blur(10px)'
        });

        // Animation with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", // Starts when top of section hits 70% of viewport
                toggleActions: "play none none reverse" // Reverses when scrolling back up
            }
        });

        tl.to(lines, {
            duration: 1.5,
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            stagger: 0.8, // 0.8s delay between lines
            ease: 'power2.out'
        });

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <section id="statement" ref={containerRef}>
            <div className="container">
                <div className="statement-text">
                    <h2 className="display-2 statement-line" id="line1" ref={line1Ref}>I didn't want to wish you on time.</h2>
                    <h2 className="display-2 statement-line" id="line2" ref={line2Ref}>I wanted to wish you forever.</h2>
                </div>
            </div>
        </section>
    );
};

export default Statement;
