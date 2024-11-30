import React, { createContext } from 'react';
import { NavLink, } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { product_title, product_id, product_image, price } = product;
    return (

            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img className="h-56 rounded-xl" src={product_image} alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: $ {price}</p>
                    <div className="card-actions ">
                        <NavLink to={`/products/details/${product_id}`}><button className="btn text-[#9538E2] rounded-full bg-white px-5 border-violet-900">View Details</button></NavLink>
                    </div>
                </div>
            </div>
    );
};

export default SingleProduct;