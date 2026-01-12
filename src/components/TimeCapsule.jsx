import React, { useState, useEffect } from 'react';
import './TimeCapsule.css';

const TimeCapsule = () => {
    const [message, setMessage] = useState('');
    const [isLocked, setIsLocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState({});
    const [targetDate, setTargetDate] = useState(null);

    useEffect(() => {
        // Calculate next Dec 30
        const now = new Date();
        let nextBday = new Date(now.getFullYear(), 11, 30); // Month is 0-indexed: 11 = Dec

        if (now > nextBday) {
            nextBday.setFullYear(now.getFullYear() + 1);
        }

        setTargetDate(nextBday);

        // Load saved state
        const savedData = localStorage.getItem('bdayCapsule');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            setMessage(parsed.message);
            setIsLocked(true);
        }

        const timer = setInterval(() => {
            if (!nextBday) return;

            const difference = nextBday - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                // Birthday arrived!
                setIsLocked(false);
                setTimeLeft({});
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleLock = () => {
        if (!message.trim()) {
            alert("Please write a message first!");
            return;
        }

        const data = {
            message,
            lockedAt: new Date().toISOString()
        };

        localStorage.setItem('bdayCapsule', JSON.stringify(data));
        setIsLocked(true);
    };

    return (
        <section id="time-capsule">
            <div className="container">
                <div className="capsule-content">
                    <h2 className="headline" style={{ marginBottom: '0.5rem' }}>For Your Next Birthday</h2>
                    <p className="subtitle" style={{ color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '3rem' }}>
                        OPEN THIS ON 30 DECEMBER
                    </p>

                    <div className="countdown-container">
                        <div className="time-block">
                            <span className="time-number">{timeLeft.days || 0}</span>
                            <span className="time-label">DAYS</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{timeLeft.hours || 0}</span>
                            <span className="time-label">HOURS</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{timeLeft.minutes || 0}</span>
                            <span className="time-label">MINUTES</span>
                        </div>
                        <div className="separator">:</div>
                        <div className="time-block">
                            <span className="time-number">{timeLeft.seconds || 0}</span>
                            <span className="time-label">SECONDS</span>
                        </div>
                    </div>

                    <div className="message-container glass-card">
                        {!isLocked ? (
                            <>
                                <p className="instruction-text">
                                    Write a message for yourself (or for us) to read on your next birthday.
                                    Once you lock it, it stays hidden until the big day.
                                </p>
                                <textarea
                                    className="capsule-textarea"
                                    placeholder="Write your secret message here..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button className="lock-btn" onClick={handleLock}>
                                    🔒 Lock Until Birthday
                                </button>
                            </>
                        ) : (
                            <div className="locked-view">
                                <div className="lock-icon">🔒</div>
                                <h3>This message is locked</h3>
                                <p>Strictly for 30th December. No peeking!</p>
                                <p className="sub-note">"ye sb i will not be there..open this on ur next day"</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimeCapsule;
