import React, { useState, useEffect } from 'react';
import './TimeTogether.css';

const TimeTogether = () => {
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const startDate = new Date('2020-01-31T00:00:00');

        const timer = setInterval(() => {
            const now = new Date();
            const difference = now.getTime() - startDate.getTime();

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeElapsed({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="time-together">
            <div className="container">
                <div className="timer-wrapper glass-card">
                    <h2 className="headline" style={{ marginBottom: '2rem' }}>Since We Began</h2>
                    <p className="medium-text" style={{ marginBottom: '3rem', opacity: 0.8 }}>
                        Every second counts because every second is with you.
                    </p>

                    <div className="timer-grid">
                        <div className="timer-item">
                            <span className="timer-value">{timeElapsed.days}</span>
                            <span className="timer-label">Days</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{String(timeElapsed.hours).padStart(2, '0')}</span>
                            <span className="timer-label">Hours</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value">{String(timeElapsed.minutes).padStart(2, '0')}</span>
                            <span className="timer-label">Minutes</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="timer-item">
                            <span className="timer-value highlight">{String(timeElapsed.seconds).padStart(2, '0')}</span>
                            <span className="timer-label">Seconds</span>
                        </div>
                    </div>

                    <div className="timer-footer">
                        Since January 31, 2019
                    </div>
                </div>
            </div>
        </section>
    );
 };

export default TimeTogether;
