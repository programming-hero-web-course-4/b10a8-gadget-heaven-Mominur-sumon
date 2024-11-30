import React from 'react';
import bannerBg from '../assets/banner.jpg';
const Banner = () => {
    return (
        <div className='mb-80'>
            <div className='bg-[#9538E2] text-center text-white'>
                <div className='w-2/3 mx-auto pb-40 flex justify-center items-center'>
                    <h2 className='text-5xl py-5 font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className='w-5/6 mx-auto opacity-90 my-2'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='btn rounded-full px-5'>Shop Now</button>
                </div>

            </div>
            <div className='hidden md:block p-2 rounded-2xl absolute top-96 w-2/3 left-64'>
               <img className='rounded-lg border-4 h-96 w-full' src={bannerBg} alt="" />
            </div>
        </div>
    );
};

export default Banner;