import React from 'react';

const SingleProduct = ({product}) => {
    const {product_title, product_id, product_image,price} = product;
    console.log(product);
   
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
               <img src={product_image} alt={product_title} className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;