import React, { useEffect, useRef } from 'react';
import './StorySection.css';

const StorySection = ({ id, className, title, date, children, contentStyle }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lines = entry.target.querySelectorAll('.story-line');
                    lines.forEach((line, index) => {
                        setTimeout(() => {
                            line.classList.add('visible');
                        }, index * 300);
                    });
                }
            });
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id={id} className={`story-section ${className || ''}`} ref={sectionRef}>
            <div className="container">
                {id === 'first-kiss' ? (
                    <div className="kiss-container">
                        <h2 className="headline">{title}</h2>
                        <span className="story-date">{date}</span>
                        <div className="story-content" style={contentStyle}>
                            {children}
                        </div>
                    </div>
                ) : (
                    <div className="story-content" style={contentStyle}>
                        <h2 className="headline" style={id === 'perfect-moment' ? { color: 'var(--gold)', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' } : {}}>{title}</h2>
                        <span className="story-date">{date}</span>
                        <div style={id === 'perfect-moment' ? { marginTop: '3rem' } : {}}>
                            {children}
                        </div>
                    </div>
                )}
            </div>
            {id === 'perfect-moment' && <div className="moment-glow"></div>}
        </section>
    );
};

export default StorySection;
