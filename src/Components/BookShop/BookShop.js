import React, { useEffect, useState } from 'react';
import BookCart from '../BookCart/BookCart';

const BookShop = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div className='grid md:grid-cols-3 justify-center items-center gap-5 md:px-10 md:py-10'>
          {
              books.map(book=><BookCart
              key={book.id}
              book={book}
              ></BookCart>)
          }
        </div>
    );
};

export default BookShop;