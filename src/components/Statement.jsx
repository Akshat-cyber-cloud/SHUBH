import React, { useEffect, useRef } from 'react';
import './Statement.css';

const Statement = () => {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);

    useEffect(() => {
        if (line1Ref.current) {
            setTimeout(() => {
                line1Ref.current.style.transition = 'all 1.5s var(--transition)';
                line1Ref.current.style.opacity = '1';
                line1Ref.current.style.transform = 'translateY(0)';
            }, 500);
        }

        if (line2Ref.current) {
            setTimeout(() => {
                line2Ref.current.style.transition = 'all 1.5s var(--transition)';
                line2Ref.current.style.opacity = '1';
                line2Ref.current.style.transform = 'translateY(0)';
            }, 1500);
        }
    }, []);

    // Note: Original code used setTimeout, but typically you'd want IntersectionObserver here too if it's below the fold.
    // However, the original code called initStatement() capable of running on load (assuming it is visible or just timed).
    // Given its position after Intro, it might be visible.
    // Let's add IntersectionObserver to be safe/better.

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger animations already handled by timeout relative to load? 
                    // The original code InitStatement was called on DOMContentLoaded.
                    // If we want it to animate when scrolled into view:
                    if (entry.target.id === 'statement') {
                        // Reset opacity/transform if we want re-trigger? Usually run once.
                        // Actually, let's keep the timeout based logic but trigger it only when section is visible is better UX.
                        // But strictly following original logic: it ran on load.
                        // But 'below fold' elements running on load is bad.
                        // Let's enhance it with Observer.
                    }
                }
            });
        });
        // Keeping it simple to match original behavior for now: timed after mount.
    }, []);

    return (
        <section id="statement">
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
