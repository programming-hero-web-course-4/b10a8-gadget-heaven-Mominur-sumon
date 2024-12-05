import Swal from 'sweetalert2'
import { useContext, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AppContext } from '../main';

const Details = () => {


    const {Cards, setCards, wishList, setWishList} = useContext(AppContext);

    const handleAddToCart = (product) => {
        if(Cards.find((card)=>card.product_id === product.product_id)){
            Swal.fire({
                icon: "error",
                title: "Product already in cart!",
                text: "You can only add one product at a time",
                timer: 2000,
              });
            return;
        }
        setCards([...Cards, product]);
        Swal.fire({
            icon: "success",
            title: "Product added to cart successfully!",
            timer: 2000
          });
    }

    const handleAddToWishList = (product) => {
        if(wishList.find((card)=>card.product_id === product.product_id)){
            Swal.fire({
                icon: "error",
                title: "Product already in wishlist!",
                text: "You can only add one product at a time",
                timer: 2000,
              });
            return;
        }
        setWishList([...wishList, product]);
        Swal.fire({
            icon: "success",
            title: "Product added to Wishlist successfully!",
            timer: 2000
          });
    }

    useEffect(() => {
        console.log("cards",Cards);
        console.log(wishList);
    }, [Cards, wishList]);

    const { id } = useParams();
    const products = useLoaderData();
    const product = products.find((product) => product.product_id === Number(id));
    const { product_title, product_image, price, availability, description, rating } = product;
    return (
        <div className='relative pb-96'>
            <div className='text-center bg-[#9835E2] pt-3 pb-44 text-white '>
                <h2 className='text-3xl font-bold'>Product Details</h2>
                <p className='w-1/2 mx-auto my-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='absolute w-full top-40'>
                <div className="hero border-2 rounded-xl w-2/3 mx-auto bg-white">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="w-1/3" />
                        <div>
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <p className='font-semibold text-lg py-2'>Price: ${price}</p>
                            {availability ? <p className='text-green-500 border-2 w-fit px-3 py-1 rounded-full border-green-500'>In Stock</p> : <p className='text-red-500 border-2 w-fit px-3 py-1 rounded-full border-green-500'>Out of Stock</p>}
                            <p className="py-3 text-lg opacity-90">
                                {description}
                            </p>
                            <div className='my-2'>
                                <p className='text-xl font-semibold'>Specification:</p>
                                <ul>
                                    {product.specifications.map((spec, idx) => <li className='opacity-90'>{idx + 1}. {spec}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h2 className='font-semibold text-lg'>Rating ⭐ </h2>
                                <p><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star text-yellow-400"></i><i class="fa-solid fa-star-half-stroke text-yellow-400 mr-5"></i><span className='border-2 px-3 rounded-2xl'>{rating}</span></p>
                            </div>
                            <div className='py-4 flex gap-5'>
                                <button onClick={()=>handleAddToCart(product)} className="px-3 py-2 hover:bg-[#9835E2] rounded-full border-[#9835E2] border hover:text-white">Add To Card  <i class="fa-solid fa-cart-shopping"></i></button>
                                <button onClick={()=>handleAddToWishList(product)} className="px-3 py-2 hover:bg-[#9835E2] rounded-full border-[#9835E2] border hover:text-white"><i class="fa-regular fa-heart text-xl"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;