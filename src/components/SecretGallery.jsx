import React, { useState } from 'react';
import InfiniteMenu from './InfiniteMenu';
import './SecretGallery.css';

const SecretGallery = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const checkPassword = () => {
        if (password.toLowerCase() === 'momo') {
            setIsUnlocked(true);
            setError(false);
            // Trigger confetti/hearts logic here if desired
            createHeartExplosion();
        } else {
            setError(true);
            setPassword('');
            setTimeout(() => setError(false), 500);
        }
    };

    const createHeartExplosion = () => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.position = 'fixed';
                heart.style.fontSize = Math.random() * 2 + 1 + 'rem';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                heart.style.opacity = '0.8';
                heart.style.zIndex = '1000';
                heart.style.pointerEvents = 'none';
                heart.style.transition = 'all 1s ease-out';
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.style.top = '-10vh';
                    heart.style.opacity = '0';
                    heart.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 2 + 1})`;
                }, 10);

                setTimeout(() => {
                    document.body.removeChild(heart);
                }, 1100);
            }, i * 50);
        }
    };

    const items = [
        {
            image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000&auto=format&fit=crop',
            link: '#',
            title: 'First Connection',
            description: 'The moment our stars aligned.'
        },
        {
            image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop',
            link: '#',
            title: 'Blossoming Love',
            description: 'Watching us grow every single day.'
        },
        {
            image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000&auto=format&fit=crop',
            link: '#',
            title: 'Golden Hours',
            description: 'Time stands still when I am with you.'
        },
        {
            image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop',
            link: '#',
            title: 'By Your Side',
            description: 'The safest place in the world.'
        }
    ];

    return (
        <section id="moments">
            <div className="container">
                <div className="moments-container">
                    <h2 className="headline">Our Special Moments</h2>
                    <p className="medium-text" style={{ marginTop: '1rem', opacity: 0.7 }}>Treasured memories, forever ours</p>

                    {!isUnlocked ? (
                        <div id="passwordSection" className="password-section">
                            <p className="body-text hint-text">Enter our secret word to unlock these precious memories</p>

                            <div className={`password-wrapper ${error ? 'shake' : ''}`}>
                                <input
                                    type="password"
                                    className="password-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                                    placeholder="Enter secret word..."
                                    autoComplete="off"
                                />
                                <button
                                    className="unlock-btn"
                                    onClick={checkPassword}
                                >
                                    Unlock
                                </button>
                            </div>

                            <p className="small-text sub-hint">Hint: What she lovingly calls you (4 letters)</p>
                        </div>
                    ) : (
                        <div style={{
                            height: '600px',
                            width: '100%',  
                            position: 'relative',
                            marginTop: '4rem',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 175, 55, 0.1)'
                        }}>
                            <InfiniteMenu items={items} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecretGallery;
