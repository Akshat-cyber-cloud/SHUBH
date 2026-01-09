import React, { useState } from 'react';
import './LoveQuiz.css';

const LoveQuiz = () => {
    const [result, setResult] = useState(null);
    const [selected, setSelected] = useState(null);

    const questions = [
        { id: 1, text: "The first time we talked for hours without realizing" },
        { id: 2, text: "That Holi hug where colors didn't matter" },
        { id: 3, text: "The silent hours at Assi Ghat" },
        { id: 4, text: "Every ordinary moment that felt extraordinary" }
    ];

    const results = {
        1: "Our love language is Deep Connection - finding meaning in every conversation, seeing the universe in each other's words.",
        2: "Our love language is Physical Touch - speaking volumes through gentle touches, hugs that feel like coming home.",
        3: "Our love language is Quality Time - finding heaven in shared silences, building worlds in quiet moments together.",
        4: "Our love language is Acts of Service - turning ordinary moments into extraordinary memories through simple, loving actions."
    };

    const handleOptionClick = (id) => {
        setSelected(id);
        const text = results[id];
        setResult(text);
    };

    return (
        <section id="love-quiz">
            <div className="container">
                <div className="quiz-container">
                    <h2 className="headline" style={{ fontSize: '2.5rem' }}>Our Love Language</h2>
                    <p className="medium-text" style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '1rem' }}>Discover what makes our love unique</p>

                    <div className="quiz-content-wrapper">
                        <div className="quiz-question glass-card" style={{ padding: '3rem', opacity: 1, transform: 'translateY(0)' }}>
                            <h3 className="medium-text" style={{ marginBottom: '2.5rem', textAlign: 'left', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}>What's our most precious memory?</h3>
                            <div className="quiz-options">
                                {questions.map(q => (
                                    <div
                                        key={q.id}
                                        className={`quiz-option ${selected === q.id ? 'selected' : ''} ${selected && selected !== q.id ? 'dimmed' : ''}`}
                                        onClick={() => handleOptionClick(q.id)}
                                    >
                                        <div className="option-marker"></div>
                                        <p className="body-text quiz-text">{q.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`quiz-result-container ${result ? 'active' : ''}`}>
                            {result ? (
                                <div id="quizResult" className="glass-card result-card">
                                    <h3 className="medium-text" style={{ color: 'var(--gold)' }}>Our Love Language</h3>
                                    <p className="body-text" style={{ marginTop: '1rem' }}>{result}</p>
                                </div>
                            ) : (
                                <div className="result-placeholder">
                                    <p className="small-text" style={{ opacity: 0.5 }}>Select a memory to reveal our love language...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoveQuiz;
