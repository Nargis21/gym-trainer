import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, review } = props.review
    return (
        <div className='review-container'>
            <p>{review}</p>
            <h2>{name}</h2>
        </div>
    );
};

export default Review;