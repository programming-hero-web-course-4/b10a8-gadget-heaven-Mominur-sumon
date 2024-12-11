import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleProduct from './SingleProduct';




const AllProducts = () => {
    const { category } = useParams();
    const loaderProducts = useLoaderData();
    const [products, setProducts] = useState(loaderProducts);
    useEffect(() => {
        if (category) {
            const filteredProducts = loaderProducts.filter((product) => product.category === category);
            setProducts(filteredProducts);
        } else {
            setProducts(loaderProducts);
        }
    }, [category]);
    
    const allProductContext = createContext(products);

    return (
        <allProductContext.Provider value={allProductContext}>
            <div className='grid grid-cols-3 gap-5 py-5'>
            {
                products.map((product) => (<SingleProduct product={product}></SingleProduct>))
            }
        </div>
        </allProductContext.Provider>
    );
};

export default AllProducts;