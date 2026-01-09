import React, { useEffect, useRef } from 'react';

import ImageTrail from './ImageTrail';
import './Intro.css';

const Intro = () => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);
    const scrollHintRef = useRef(null);

    useEffect(() => {
        const texts = [text1Ref.current, text2Ref.current, text3Ref.current];

        texts.forEach((text, index) => {
            if (text) {
                setTimeout(() => {
                    text.style.transition = 'transform 2.5s var(--transition), opacity 2.5s var(--transition)';
                    text.style.transform = 'translateY(0)';
                    text.style.opacity = '1';
                }, index * 1800);
            }
        });

        if (scrollHintRef.current) {
            setTimeout(() => {
                scrollHintRef.current.style.transition = 'opacity 2s var(--transition)';
                scrollHintRef.current.style.opacity = '1';
            }, 6000);
        }
    }, []);

    return (
        <section id="intro">
            {/* ImageTrail Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 1 }}>
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

            <div className="container">
                <div className="intro-content">
                    <div className="intro-line">
                        <h1 className="display">
                            <span className="intro-text" ref={text1Ref}>Some things</span>
                        </h1>
                    </div>
                    <div className="intro-line">
                        <h1 className="display">
                            <span className="intro-text" ref={text2Ref}>aren't meant</span>
                        </h1>
                    </div>
                    <div className="intro-line">
                        <h1 className="display">
                            <span className="intro-text" ref={text3Ref}>to be rushed.</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="scroll-hint" ref={scrollHintRef}>
                <span>Begin our story</span>
            </div>
        </section>
    );
};

export default Intro;
