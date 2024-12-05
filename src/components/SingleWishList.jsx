import React, { useContext } from 'react';
import { AppContext } from '../main';

const SingleWishList = ({ card }) => {
    const { Cards, setCards, wishList, setWishList } = useContext(AppContext);
    const { product_id, product_title, price, description, product_image } = card;

    const handleRemove = () => {
        const newwishList = wishList.filter((c) => c.product_id !== product_id);
        setWishList(newwishList);
    }

    const handleAddToCart = () => {
        if (Cards.find((card) => card.product_id === product_id)) {
            Swal.fire({
                icon: "error",
                title: "Product already in cart!",
                text: "You can only add one product at a time",
                timer: 2000,
            });
            return;
        } else {

            Swal.fire({
                icon: "success",
                title: "Product added to cart successfully!",
                timer: 2000
            });
            setCards([...Cards, card]);
        }

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
                    <button onClick={handleAddToCart} className='px-5 py-2 bg-[#9835E2] border-2 rounded-full'>Add to Card</button>
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

export default SingleWishList;