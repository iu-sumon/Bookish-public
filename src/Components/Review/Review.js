import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews]=useReview();
    return (
        <div className='grid md:grid-cols-3 justify-center items-center md:w-[70%] mx-auto gap-5 md:my-10 px-3 py-3'>
            
            {
                reviews.map(review=><ReviewCart
                review={review}
                key={review.id}
                ></ReviewCart>)
            }
        </div>
    );
};

export default Review;