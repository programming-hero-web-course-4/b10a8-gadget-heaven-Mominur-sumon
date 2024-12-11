import React, { useContext } from 'react';
import { AppContext } from '../main';

const History = () => {
    const { purchased } = useContext(AppContext);
    return (
        <div>
            {purchased.length === 0 && <h1 className='text-2xl text-center mt-5 font-bold'>You Don't Purchased Any Product From Us</h1>}
            {
                purchased.length > 0 &&
                <>
                    <h1 className='text-3xl text-center font-semibold mt-5'>Purchase History</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

                        {purchased.map((card) => (
                            <div className='bg-gray-100 p-5 rounded-lg'>
                                <h1 className='text-2xl font-semibold'>{card.product_title}</h1>
                                <p className='text-gray-600'>{card.description}</p>
                                <p>Price: $ {card.price}</p>
                            </div>
                        ))}

                    </div>
                </>
            }


        </div>
    );
};

export default History;