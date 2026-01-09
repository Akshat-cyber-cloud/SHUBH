import React from 'react';
import './FinalSection.css';

const FinalSection = () => {
    return (
        <section id="final">
            <div className="container">
                <div className="final-content">
                    <h2 className="display-2 final-title">Belated or not,</h2>
                    <h2 className="display-2 final-title">my love for you is always on time.</h2>
                    <p className="final-subtitle" style={{ marginTop: '2rem', fontSize: '1.2rem', opacity: 0.8 }}>For kaduu, my baby—my forever, my everything</p>
                    <button
                        className="promise-button glass-card"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            border: 'none',
                            textDecoration: 'none',
                            marginTop: '3rem',
                            padding: '1rem 2rem',
                            cursor: 'pointer',
                            color: 'var(--off-white)',
                            background: 'rgba(26, 24, 24, 0.7)',
                            fontSize: '1rem'
                        }}
                    >
                        This is not the end
                    </button>
                    <p className="final-note" style={{ marginTop: '1rem', fontStyle: 'italic', opacity: 0.6 }}>It never was, and it never will be</p>
                </div>
            </div>
        </section>
    );
};

export default FinalSection;
