import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    // Use refs for mutable values to avoid re-renders
    const mousePos = useRef({ x: 0, y: 0 });
    const outlinePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Update dot position immediately
            if (dot) {
                dot.style.left = `${e.clientX}px`;
                dot.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseOver = (e) => {
            if (e.target.matches('a, button, .clickable, input, textarea, select, [role="button"], .course-card, .story-section')) {
                document.body.classList.add('hovering');
            } else {
                document.body.classList.remove('hovering');
            }
        };

        // For smoother check, we can check computed style cursor: pointer? 
        // But explicit tags are safer for performance.

        let animationFrameId;

        const animatecursor = () => {
            // Lerp (Linear Interpolation) for the outline
            const ease = 0.15; // increased from standard 0.1 for snappier but still smooth feel

            outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * ease;
            outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * ease;

            if (outline) {
                outline.style.left = `${outlinePos.current.x}px`;
                outline.style.top = `${outlinePos.current.y}px`;
            }

            animationFrameId = requestAnimationFrame(animatecursor);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        animatecursor();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
            document.body.classList.remove('hovering');
        };
    }, []);

    return (
        <>
            <div ref={outlineRef} className="cursor-outline"></div>
            <div ref={dotRef} className="cursor-dot"></div>
        </>
    );
};

export default CustomCursor;
