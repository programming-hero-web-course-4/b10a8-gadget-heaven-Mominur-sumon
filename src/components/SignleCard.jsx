import React, { useContext } from 'react';
import { AppContext } from '../main';

const SignleCard = ({ card }) => {
    const { Cards, setCards } = useContext(AppContext);
    const { product_id, product_title, price, description, product_image } = card;

    const handleRemove = () => {
        const newCards = Cards.filter((c) => c.product_id !== product_id);
        setCards(newCards);


    }

    return (
        <div className='flex justify-between items-center w-5/6 mx-auto'>
            <div className='flex justify-center items-center gap-5'>
                <div>
                    <img className='h-40 rounded-lg w-[250px]' src={product_image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <p className='text-gray-600'>{description}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
            <div>
                <button
                    onClick={handleRemove}
                    className='border-2 border-red-700 text-red-700 px-3 rounded-full'>X</button>
            </div>
        </div>
    );
};

export default SignleCard;