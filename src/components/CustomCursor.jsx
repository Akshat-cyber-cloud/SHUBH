import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        const moveCursor = (e) => {
            if (cursor && cursorDot) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                cursorDot.style.left = e.clientX + 'px';
                cursorDot.style.top = e.clientY + 'px';
            }
        };

        const mouseDown = () => {
            if (cursor) cursor.style.transform = 'scale(0.5)';
        };

        const mouseUp = () => {
            if (cursor) cursor.style.transform = 'scale(1)';
        };

        // Add interactivity for hover elements
        const handleMouseEnter = () => {
            if (cursor) {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = 'var(--rose)';
            }
        };

        const handleMouseLeave = () => {
            if (cursor) {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.borderColor = 'var(--gold)';
            }
        };

        document.addEventListener('mousemove', moveCursor);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mouseup', mouseUp);

        // Attach hover listeners dynamically to specific elements is tricky in React without context or global observer.
        // For now, let's rely on standard CSS hover or manual attachment if needed.
        // Ideally, we'd use a context or data attributes.
        // We can add a global delegation listener?
        const handleMouseOver = (e) => {
            if (e.target.matches('button, .moment-card, .quiz-option, .promise-flower, .tree-leaf, a')) {
                handleMouseEnter();
            } else {
                // We can't easily detect "leave" for delegation without knowing if we left *to* valid element
                // But we can check on every mouseover if target is NOT interactive.
                // Simpler: use CSS for cursor changes if possible, but this is custom div cursor.
                // Let's attach to document and check target.
            }
        };

        // Better implementation for hover state: check target on mousemove/over
        const checkHover = (e) => {
            const isHoverable = e.target.closest('button, .moment-card, .quiz-option, .promise-flower, .tree-leaf, a, .cursor-hover');
            if (isHoverable) {
                handleMouseEnter();
            } else {
                handleMouseLeave();
            }
        };

        document.addEventListener('mouseover', checkHover);


        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mousedown', mouseDown);
            document.removeEventListener('mouseup', mouseUp);
            document.removeEventListener('mouseover', checkHover);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-dot" ref={cursorDotRef}></div>
        </>
    );
};

export default CustomCursor;
