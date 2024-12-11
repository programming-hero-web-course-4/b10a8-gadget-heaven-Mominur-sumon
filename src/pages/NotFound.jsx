import React from 'react';
import notfound from '../assets/notfound.jpg';
const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center mb-3'>
            <h3 className='text-4xl font-medium mt-5'>Ops This Page is Not Found</h3>
            <img
                className='w-1/4 mx-auto mt-3'
                src={notfound} alt="Not Found" />

        </div>
    );
};

export default NotFound;