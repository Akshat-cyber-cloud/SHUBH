import React, { useEffect, useRef, useState } from 'react';
import './LoveLetter.css';

const LoveLetter = () => {
    const letterContent = `Hey kaduu..

Sbse phle toh belated happy birthday once again, sorry late se present krne ke lie, but left with no other option. Hope ye website tmhe pasand aya hoga, this is not just a website, this is the timeline of our love story from the very starting day - 31st january the day when you walked into my life. From that day my love for you has been increasing day by day no matter on what terms we are, whether we are in contact phase or in non-contact phase. You are the most important person in my life i can say❤️..Love you so muchh betuu. I know sometimes, sometimes ky most of time things aren’t good between us, but jo bhi thoda sa smy hmlog ke bich me cheeze thk rhi hai..usse best aaj tak kuch nai hua hai..na hi experience kiya hai. Aur ky hi mtlb chahe cheezein kitne hi bar bigad jye..at the end humlog sath ho hi jaate hai🫶🏻🫂❤️. To be very honest I am a person jisse apne birthday ki koi excitement ni hai, but the day u have came in my life, i just wish ki boht acha krna hai iske bday pe, i just want to make her happy. And dekho issbar mauka bhi milgya sath me celebrate krne ka bhale hi late se q na mila, I promise i will always make u feel the happiest not just on ur birthdays but on each normal day as well!. Haan i know I am bad at writing letters making those type of efforts as you do, but it doesn’t mean hm krna nai chhahte, i tried but hua nai meres😕, then islie hm soche why not to do things at which I m expert and i made this website for you..which will always be with you doesn’t matter if i will be there or not..this site..this timeline..this love of mine will always be with you..just u have to remember the url. You know in life a person falls in love with a person for two times..for the first time jab starting phase mei..nyi nyi baat chit..attraction, affection ya infatuation jo bhi kehlo this is the first time when people feels love..nd for the second time when they comes to know the real you..tmhri insecurities..tmhri flaws, tmhri perfection, tmhri imperfection…and ye sb jnkr bhi if you are loving the same person again..then that type of love stays my love❤️..and i guess we are in that stage now🫂❤️…No matter what aditi..chahe cheezein kitni bhi bigad jye..I will never give up on you..ye yaad rkhna..as i said earlier also..I’ll always be there for you no matter what terms are we on. I love you so muchh aditi❤️..I like you kaduu more than l've liked anyone in my life. The way I feel for you is rare,insane, and honestly it scares me a little because i don't want to lose you. I don't even know what to call this, but l've fallen so hard.
Sach toh yeh hai ki i fuckingly love you.
I've never felt like this before I smile every time your name pops up, and l'd drop everything just to hear your voice. When you text, send a video, or send a picture, my heart skips a beat.
I can't wait for the day I tell you this looking straight into your eyes. I can't wait to fall asleep in your arms, to cuddle through movie nights, to lie underikes blankets in our backyard and stare at the stars while we hold each other. I love you so much❤️…and to the end I just want to say that I’ll always be there for you..always..

Not so handsome, not so perfect, But if you ever cry, ever be tensed or feel low, I'll be the one holding you close, Letting you sleep in my arms, until you feel safe enough to smile again.

Happiest bdayy aditi❤️🫶🏻🫂`;

    const [displayedContent, setDisplayedContent] = useState('');
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [isStarted, setIsStarted] = useState(false);
    const indexRef = useRef(0);
    const timeoutRef = useRef(null);

    // 1. Observer Effect: Only sets isStarted to true once.
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsStarted(true);
                observer.disconnect(); // Disconnect immediately once started
            }
        }, { threshold: 0.3 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // 2. Typing Effect: Runs when isStarted is true
    useEffect(() => {
        if (!isStarted) return;

        const typeWriter = () => {
            const currentIndex = indexRef.current;
            if (currentIndex < letterContent.length) {
                // Always set content from 0 to current index + 1
                // This is idempotent: running it twice for same index produces same result
                setDisplayedContent(letterContent.substring(0, currentIndex + 1));
                indexRef.current += 1;

                if (contentRef.current) {
                    contentRef.current.scrollTop = contentRef.current.scrollHeight;
                }

                const speed = Math.random() * 50 + 50;
                timeoutRef.current = setTimeout(typeWriter, speed);
            }
        };

        typeWriter();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [isStarted]);

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
