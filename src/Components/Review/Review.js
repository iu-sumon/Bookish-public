import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {
    const [reviews]=useReview()
    return (
        <div className='grid md:grid-cols-3 justify-center items-center w-[70%] mx-auto gap-5 my-10 border-4 px-3 py-3'>
            
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