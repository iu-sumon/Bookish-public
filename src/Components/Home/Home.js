import React from 'react';
import photo1 from '../../images/1.jpg'
const Home = () => {
    return (
        <div className='grid grid-cols-2 justify-items-center px-4 py-5 bg-[#5D97FF] width-full'>
            <div>
               <h1 className='text-[45px] text-white  mb-10'>Books are a uniquely portable magic</h1>
               <p className='text-white'>Life is a struggle for single father Chris Gardner. Evicted from their apartment, he and his young son find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son</p>
            </div>
            <div className='border-2 px-1 py-1 rounded-lg'>
                <img className='rounded-lg' src={photo1} alt="" />
            </div>
        </div>
    );
};

export default Home;