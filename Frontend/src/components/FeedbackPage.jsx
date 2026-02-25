import React, { useState } from 'react';
import { Send, MessageSquare, Star } from 'lucide-react';
import './FeedbackPage.css';

const FeedbackPage = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="feedback-page success">
                <div className="success-content">
                    <div className="success-icon">🎉</div>
                    <h1>Thank You!</h1>
                    <p>Your feedback helps us make Fitway better for everyone.</p>
                    <button onClick={() => setSubmitted(false)} className="back-btn">Send More Feedback</button>
                </div>
            </div>
        );
    }

    return (
        <div className="feedback-page">
            <h1 className="page-title">Feedback & Support</h1>

            <div className="feedback-container">
                <div className="feedback-card">
                    <div className="card-header">
                        <MessageSquare className="text-blue" size={24} />
                        <h3>Share your thoughts</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="feedback-form">
                        <div className="rating-section">
                            <label>Rate your experience</label>
                            <div className="stars">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star
                                        key={s}
                                        size={32}
                                        className={`star-icon ${rating >= s ? 'active' : ''}`}
                                        fill={rating >= s ? '#FFCC00' : 'none'}
                                        onClick={() => setRating(s)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="input-group">
                            <label>What can we improve?</label>
                            <textarea
                                placeholder="Describe your experience or suggest a feature..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            <Send size={20} />
                            Submit Feedback
                        </button>
                    </form>
                </div>

                <div className="support-info">
                    <h3>Need immediate help?</h3>
                    <p>Email us at: <strong>support@fitway.com</strong></p>
                    <p>Response time: Usually within 24 hours</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;
