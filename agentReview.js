// AgentPage.js

import React, { useState } from 'react';
import './agentPage.css'; // Import CSS file

function AgentReview() {
  // Dummy data for agent ratings and reviews
  const [agentReviews, setAgentReviews] = useState([
    { id: 1, sellerName: 'Seller1', rating: 4, review: 'Great service!', reply: '' },
    { id: 2, sellerName: 'Seller2', rating: 5, review: 'Very helpful agent', reply: '' },
    { id: 3, sellerName: 'Seller3', rating: 3, review: 'Average experience', reply: '' },
  ]);

  // Function to handle agent's reply to a review
  const handleReply = (id, reply) => {
    const updatedReviews = agentReviews.map(review =>
      review.id === id ? { ...review, reply: reply } : review
    );
    setAgentReviews(updatedReviews);
  };

  // Function to handle hiding the reply textarea after replying
  const handleHideReply = (id) => {
    const updatedReviews = agentReviews.map(review =>
      review.id === id ? { ...review, showReply: false } : review
    );
    setAgentReviews(updatedReviews);
  };

  return (
    <div>
      <h2>Agent Reviews</h2>
      <div>
        {agentReviews.map(review => (
          <div key={review.id} className="review">
            <div className="seller-info">
              <h3>{review.sellerName}</h3>
              <p>Rating: {review.rating}/5</p>
            </div>
            <div className="review-content">
              <p>{review.review}</p>
            </div>
            {review.showReply ? (
              <div className="reply-form">
                <textarea
                  rows="3"
                  placeholder="Reply to this review..."
                  value={review.reply}
                  onChange={(e) => handleReply(review.id, e.target.value)}
                ></textarea>
                <button type="button" onClick={() => { handleHideReply(review.id); handleReply(review.id, review.reply); }}>Reply</button>
              </div>
            ) : (
              <button type="button" onClick={() => setAgentReviews(agentReviews.map(item => (item.id === review.id ? { ...item, showReply: true } : item)))}>Reply</button>
            )}
            {review.reply && (
              <div className="agent-reply">
                <p><strong>Agent's Reply:</strong> {review.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentReview;
