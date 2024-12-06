import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../main';
import SignleCard from '../components/SignleCard';
import SingleWishList from '../components/SingleWishList';

const Dashboard = () => {
    const { Cards,setCards, wishList, setwishList } = useContext(AppContext)
    console.log(Cards);
    
    const [cardsAtive, setCardsActive] = useState(true);
    const [totalPrices, setTotalPrices] = useState(0);
    useEffect(() => {
        const totalPrices = Cards.reduce((acc, item) => acc + item.price, 0);
        setTotalPrices(totalPrices);
    }, [Cards]);
    const handleCards = () => {
        setCardsActive(true);
    }

    const handleWishlist = () => {
        setCardsActive(false);
    }

    const handleSortByPrice = () => {
        const sortedCards = [...Cards].sort((a, b) => a.price - b.price);
        setCards(sortedCards);
       

    }

    const handlePusrchases = () => {
        setCards([]);
    }

    return (
        <div>
            <div className='bg-[#9538E2] text-center py-5 text-white'>
                <h1 className='text-3xl font-bold  mb-3'>Dashboard</h1>
                <p className='w-1/2 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='my-3'>
                    <button
                        onClick={handleCards}
                        className={`border-2 mr-5 rounded-full px-10 py-3 font-medium text-lg ${cardsAtive && "bg-white text-[#9538E2]"} `}>Cart</button>
                    <button
                        onClick={handleWishlist}
                        className={`border-2 mr-5 rounded-full px-10 py-3 font-medium text-lg ${!cardsAtive && "bg-white text-[#9538E2]"} `}>Wishlist</button>
                </div>


            </div>

            <div>
                {
                    cardsAtive &&
                    <div className='flex flex-col gap-5 mt-5'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>Cart</h1>
                            <div className='flex justify-between items-center gap-8'>
                                <h1 className='font-bold text-lg'>Total Cost: ${totalPrices.toFixed(2)}</h1>

                                <button
                                    onClick={handleSortByPrice}
                                    className='px-5 py-1 border-2 border-[#9538E2] text-[#9538E2] rounded-3xl mr-5'>Sort By Price</button>

                                <button
                                    onClick={handlePusrchases}
                                    className='px-5 py-1 border-2 border-[#9538E2] bg-[#9538E2] rounded-3xl mr-5 text-white'>Purchases</button>
                            </div>
                        </div>
                        {
                            Cards.map((card) => (
                                <SignleCard card={card}></SignleCard>
                            ))}
                    </div>
                }


                {!cardsAtive && 

                    <div> 
                        <h1 className='text-2xl font-bold mt-5'>Wishlist</h1>
                        {
                            wishList.map((card) => (
                                <SingleWishList card={card}></SingleWishList>
                            ))
                        }
                    </div>
                
                }
            </div>
        </div>
    );
};

export default Dashboard;