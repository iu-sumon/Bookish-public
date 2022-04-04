import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import photo1 from '../../images/1.jpg'
import Footer from '../Footer/Footer';
import HomeReviewCart from '../HomeReviewCart/HomeReviewCart';
const Home = () => {
    const [reviews] = useReview();
    let getReviews = reviews.slice(0, 3);

    return (
        <div>
            <div className='grid grid-cols-2 justify-items-center px-4 py-5 bg-[#5D97FF] width-full'>
                <div>
                    <h1 className='text-[38px] text-white  mb-10'>BOOK IS A UNIQUELY PORTABLE MAGIC</h1>
                    <p className='text-white mb-3'>Life is a struggle for single father Chris Gardner. Evicted from their apartment, he and his young son find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son</p>
                    <Link to='/review' type="button" class="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">More Collection </Link>
                </div>
                <div className='border-2 px-1 py-1 rounded-lg'>
                    <img className='rounded-lg' src={photo1} alt="" />
                </div>
            </div>
            <div className='bg-[#161E35] py-5'>
                <h1 className='text-4xl text-white'>Customer Reviews</h1>
                <div className='grid md:grid-cols-3 justify-center items-center w-[70%] mx-auto gap-5 my-10 border-2 px-3 py-3 rounded'>
                    {
                        getReviews.map(review => <HomeReviewCart
                            review={review}
                            key={review.id}

                        ></HomeReviewCart>)
                    }
                </div>
                <div className='mt-5'>
                    <Link to='/review' type="button" class="py-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sell All Reviews </Link>
                </div>
                 <br />
                 <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;