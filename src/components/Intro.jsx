import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ImageTrail from './ImageTrail';
import './Intro.css';

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
                    items={[
                        'https://picsum.photos/id/287/300/300',
                        'https://picsum.photos/id/1001/300/300',
                        'https://picsum.photos/id/1025/300/300',
                        'https://picsum.photos/id/1026/300/300',
                        'https://picsum.photos/id/1027/300/300',
                        'https://picsum.photos/id/1028/300/300',
                        'https://picsum.photos/id/1029/300/300',
                        'https://picsum.photos/id/1030/300/300',
                    ]}
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
