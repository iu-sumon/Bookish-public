import React from 'react';

const BookCart = ({ book }) => {
    const { image } = book;
    return (
        <div className='border-2 rounded-2xl'>
            <img className='w-full h-[300px] p-1' src={image} alt="" />
        </div>
    );
};

export default BookCart;