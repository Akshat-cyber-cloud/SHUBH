import React, { useState } from 'react';
import InfiniteMenu from './InfiniteMenu';
import './SecretGallery.css';


import img1 from '../assets1/WhatsApp Image 2026-01-12 at 02.09.42 (1).jpeg';
import img2 from '../assets1/WhatsApp Image 2026-01-12 at 02.09.42.jpeg';
import img3 from '../assets1/WhatsApp Image 2026-01-12 at 02.13.13.jpeg';
import img5 from '../assets1/WhatsApp Image 2026-01-12 at 02.14.38.jpeg';

import imgNew1 from '../assets1/WhatsApp Image 2026-01-11 at 01.56.41.jpeg';
import imgNew2 from '../assets1/WhatsApp Image 2026-01-12 at 02.07.57.jpeg';
import newVideo from '../assets1/WhatsApp Video 2026-01-13 at 18.53.51.mp4';

import assetImg1 from '../assets/WhatsApp Image 2026-01-12 at 02.05.20.jpeg';
import assetImg2 from '../assets/WhatsApp Image 2026-01-12 at 02.05.21.jpeg';
import assetImg3 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22 (1).jpeg';
import assetImg4 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22 (2).jpeg';
import assetImg5 from '../assets/WhatsApp Image 2026-01-12 at 02.05.22.jpeg';


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
            image: newVideo,
            link: '#',
            title: 'Our Journey',
            description: 'Moving forward together.',
            type: 'video'
        },
        {
            image: img1,
            link: '#',
            title: 'My Shining Star',
            description: 'You light up my darkest days.'
        },
        {
            image: img2,
            link: '#',
            title: 'The Moment I Knew',
            description: 'My heart whispered your name.'
        },
        {
            image: img3,
            link: '#',
            title: 'In Your Eyes',
            description: 'I found my forever home.'
        },
        {
            image: imgNew1,
            link: '#',
            title: 'Pure Joy',
            description: 'Your smile makes everything better.'
        },
        {
            image: img5,
            link: '#',
            title: 'Endless Love',
            description: 'Growing stronger with every beat.'
        },
        {
            image: imgNew2,
            link: '#',
            title: 'Together Forever',
            description: 'No place I\'d rather be.'
        },
        {
            image: assetImg1,
            link: '#',
            title: 'Beautiful Soul',
            description: 'Your kindness shines through.'
        },
        {
            image: assetImg2,
            link: '#',
            title: 'Unforgettable',
            description: 'Memories we make together.'
        },
        {
            image: assetImg3,
            link: '#',
            title: 'My Happiness',
            description: 'You are the reason for my smile.'
        },
        {
            image: assetImg4,
            link: '#',
            title: 'Cherished',
            description: 'Holding onto this forever.'
        },
        {
            image: assetImg5,
            link: '#',
            title: 'Serendipity',
            description: 'The best thing that happened to me.'
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
