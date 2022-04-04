import React from 'react';
const Blogs = () => {
    return (
        <div className='w-[60%] mx-auto py-10'>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-2xl font-semibold '>What is context API?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda temporibus pariatur quaerat perferendis ipsa similique! Cum nesciunt accusantium iusto dolor quisquam at ullam tempora veritatis nam? Quod, corporis et. Amet!</p>
            </div>
            <div className='border-2 px-5 pb-3 mb-5 shadow rounded-lg'>
                <p className='text-2xl font-semibold'>What is Semantic tag?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ex laborum non quasi deserunt veritatis, officia optio illo voluptatum iste reiciendis eum, quia maiores aperiam porro, error alias modi! Voluptatem?</p>
            </div>
            <div className='border-2 px-5 pb-3 shadow rounded-lg'>
                <p className='text-2xl font-semibold'>Inline Vs Block Vs Inline Block</p>
               <div>
                   <p className='font-semibold'>Inline</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae? Distinctio atque dignissimos hic cupiditate, dolorum provident dolor fugit, est alias placeat odit, ipsam nobis vero nihil accusantium suscipit. Vel.</p>
               </div>
               <div>
                   <p className='font-semibold'>Block</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae? Distinctio atque dignissimos hic cupiditate, dolorum provident dolor fugit, est alias placeat odit, ipsam nobis vero nihil accusantium suscipit. Vel.</p>
               </div>
               <div>
                   <p className='font-semibold'>Inline Block</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repudiandae? Distinctio atque dignissimos hic cupiditate, dolorum provident dolor fugit, est alias placeat odit, ipsam nobis vero nihil accusantium suscipit. Vel.</p>
               </div>
            </div>
        </div>

    );
};

export default Blogs;