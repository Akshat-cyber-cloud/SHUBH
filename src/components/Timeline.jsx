import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const Timeline = () => {
    const containerRef = useRef(null);

    const events = [
        {
            date: "31 JANUARY 2020",
            title: "The Beginning",
            text: "A simple hello that quietly changed everything. That random message became the most important conversation of my life, and I'm endlessly grateful I answered.",
            id: "timeline-1"
        },
        {
            date: "15 OCTOBER 2021",
            title: "First Meeting",
            text: "Dussehra day, outside your house in the temple—both of us trembling with fear but unable to stay away. Turning fear into something beautiful.",
            id: "timeline-2"
        },
        {
            date: "31 MARCH 2022",
            title: "Secret Sanctuary",
            text: "That building became our secret world where time stood still. Every second felt both endless and fleeting, every touch both familiar and brand new.",
            id: "timeline-3"
        },
        {
            date: "18 MARCH 2023",
            title: "First Hug",
            text: "The colors of Holi washed away, but the feeling of our first hug remained—a silent promise that some moments are meant to be held forever.",
            id: "timeline-4"
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'all 1.2s var(--transition)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });

        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="timeline">
            <div className="container">
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {events.map((event, index) => (
                        <div className="timeline-item" id={event.id} key={index}>
                            <div className="timeline-date">
                                <span className="small-text" style={{ color: 'var(--gold)' }}>{event.date}</span>
                            </div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <h3 className="medium-text">{event.title}</h3>
                                <p className="body-text" style={{ marginTop: '1rem' }}>{event.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
