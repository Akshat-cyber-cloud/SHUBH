import React, { useState, useEffect } from 'react';
import './TimeCapsule.css';

const TimeCapsule = () => {
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [capsules, setCapsules] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('timeCapsules') || '[]');
        setCapsules(saved);

        // Min date tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const dateInput = document.getElementById('capsuleDate');
        if (dateInput) dateInput.min = tomorrow.toISOString().split('T')[0];
    }, []);

    const saveCapsule = () => {
        if (!date || !message.trim()) {
            alert('Please select a future date and write a message');
            return;
        }

        const capsuleDate = new Date(date);
        const today = new Date();

        if (capsuleDate <= today) {
            alert('Please select a future date');
            return;
        }

        const newCapsule = {
            date,
            message,
            created: new Date().toISOString()
        };

        const updated = [...capsules, newCapsule];
        setCapsules(updated);
        localStorage.setItem('timeCapsules', JSON.stringify(updated));

        setDate('');
        setMessage('');
        alert('Message saved for ' + date);
    };

    return (
        <section id="time-capsule">
            <div className="container">
                <div className="capsule-container">
                    <h2 className="headline">Our Time Capsule</h2>
                    <p className="medium-text" style={{ marginTop: '1rem', opacity: 0.7 }}>Send a message to our future</p>

                    <div className="glass-card" style={{ padding: '3rem', marginTop: '3rem' }}>
                        <input
                            type="date"
                            className="capsule-date"
                            id="capsuleDate"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <textarea
                            className="capsule-input"
                            placeholder="Write a message to open in the future..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button
                            className="glass-card"
                            onClick={saveCapsule}
                            style={{ border: 'none', padding: '1rem 3rem', cursor: 'pointer', color: 'var(--off-white)', background: 'rgba(26, 24, 24, 0.7)' }}
                        >
                            Save for Future
                        </button>
                    </div>

                    {capsules.length > 0 && (
                        <div id="capsuleList" style={{ marginTop: '3rem' }}>
                            <h3 className="medium-text" style={{ marginBottom: '2rem' }}>Your Time Capsules</h3>
                            {capsules.map((cap, i) => (
                                <div key={i} className="glass-card" style={{ padding: '2rem', marginBottom: '1rem' }}>
                                    <p className="small-text" style={{ color: 'var(--gold)' }}>To open on {cap.date}</p>
                                    <p className="body-text" style={{ marginTop: '1rem' }}>{cap.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TimeCapsule;
