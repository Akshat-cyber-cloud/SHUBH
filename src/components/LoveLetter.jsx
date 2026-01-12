import React, { useEffect, useRef, useState } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
    const letterContent = `My dearest kaduu,

There are things in this world that time cannot measure, my love. Like the space between thinking of you and smiling—it's instantaneous, yet it feels like a lifetime of happiness compressed into a single heartbeat. Like the depth of quiet moments that need no words, where just being beside you feels like the entire universe has aligned perfectly in our favor.

Before you walked into my life, I thought I understood what love was supposed to be. I thought it was about grand gestures, perfect moments, and fairy-tale endings. But loving you, my baby, has taught me what true love actually feels like—it's not in the extraordinary, but in the beautifully ordinary. It's in the way you remember how I take my tea without ever being told, in the sound of your laughter when you're genuinely, unreservedly happy, in the safety of your silence when words feel too heavy to carry alone.

Loving you showed me that true love is patient—it doesn't rush, it doesn't demand, it simply waits and grows. It's in the gentle understanding that some distances are meant to be bridged with trust rather than physical presence. It's in waking up every single day and choosing you, all over again, even when circumstances try to convince us otherwise.

Do you know what true love feels like, kaduu? It feels like my heart still skipping a beat when I see your name appear on my phone, even after all this time. It feels like the calm that settles over me when I hear your voice after a difficult day. It feels like the future suddenly having color and shape and meaning because you're in it.

You showed me that love isn't about finding someone perfect—it's about seeing all the hidden, imperfect parts of someone and choosing to love them more because of those parts, not despite them. In your eyes, I found not just affection, but a reflection of who I want to become—someone worthy of your incredible love, someone who can love you as deeply and completely as you deserve to be loved.

This isn't about dates on a calendar or birthdays marked in red, baby. It's about every sunrise that reminds me of the light you bring into my life, every star that makes me wish you were here beside me, every song that suddenly has meaning because it whispers of us. It's about the continuous, unbreakable thread of love weaving through what would otherwise be ordinary days, making them extraordinary simply because you exist in them.

So here's to all our moments—the ones we've already lived, the ones we're living now, and the countless ones still waiting to unfold. Here's to the late-night conversations that turned into early morning confessions of dreams and fears. Here's to the distances we've bridged with nothing but love and unwavering determination. Here's to the future we're building together, one day at a time, with patience and trust.

Here's to forever with you, kaduu. Because with you, forever doesn't feel long enough—it feels like just the beginning of something truly beautiful.

Always yours,
Forever and always`;

    const [displayedContent, setDisplayedContent] = useState('');
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const hasStartedRef = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasStartedRef.current) {
                hasStartedRef.current = true;
                let index = 0;
                const typeWriter = () => {
                    if (index < letterContent.length) {
                        setDisplayedContent(prev => prev + letterContent.charAt(index));
                        index++;
                        if (contentRef.current) {
                            contentRef.current.scrollTop = contentRef.current.scrollHeight;
                        }
                        const speed = Math.random() * 50 + 50;
                        setTimeout(typeWriter, speed); // Adjusted for natural typing speed
                    }
                };
                typeWriter();
            }
        }, { threshold: 0.3 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // We can't easily concatenate state in loop with closure issue, so index tracking locally is better.
    // However, setDisplayedContent(prev => ...) works.
    // The issue above is using `index` which isn't updating in the recursion correctly if defined outside? 
    // Actually `index` is in closure of `useEffect`. It works. 
    // BUT `letterContent.charAt(index)` inside `typeWriter` uses the local `index`.
    // The `index` increments. It seems fine.

    // Correction: `index` increments in the function call stack? No, `index` is a local variable to `useEffect`.
    // The closure captures the `index` variable. `index++` modifies it. 
    // It should work.

    return (
        <section id="letter" ref={containerRef}>
            <div className="container">
                <div className="letter-container">
                    <div className="letter-header">
                        <h2 className="headline">For kaduu,</h2>
                        <div className="small-text" style={{ marginTop: '1rem', opacity: 0.6, color: 'var(--gold)' }}>
                            My baby, my forever love
                        </div>
                    </div>
                    <div className="letter-content" ref={contentRef}>
                        <div className="letter-text" style={{ whiteSpace: 'pre-wrap' }}>
                            {displayedContent}
                        </div>
                        <span className="typewriter-cursor" style={{ display: 'inline-block', width: '2px', height: '1.2em', backgroundColor: 'var(--gold)', marginLeft: '4px', animation: 'blink 1s infinite' }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoveLetter;
