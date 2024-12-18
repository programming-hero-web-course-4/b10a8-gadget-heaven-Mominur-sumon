
import Banner from '../components/Banner';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    if(location.pathname === '/'){
        document.title = 'Gadget Heaven | Home';
        
    }
    return (
        <div className='font-sora'>
            <Banner></Banner>
            <div className='grid grid-cols-5'>

                <div className='text-center px-10 pt-20 '>
                    <ul className='flex flex-col border rounded-e-xl '>
                        <Link to='/'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>All Products</li></Link>
                        <Link to = '/products/laptops'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Laptops</li></Link>
                        <Link to = '/products/phones'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Phones</li></Link>
                        <Link to= '/products/accessories'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Accesories</li></Link>
                        <Link to='/products/smartwatches'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Smart Watches</li></Link>
                        <Link to= '/products/macbooks'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Macbook</li></Link>
                        <Link to = '/products/iphones'><li className='btn w-40 text-gray-600 font-semibold my-2 rounded-full hover:bg-[#9538E2] hover:text-white'>Iphones</li></Link>
                    </ul>

                </div>
                <div className='col-span-4'>
                    <h2 className='text-4xl font-semibold opacity-95 mt-5'>Explore Cutting-Edge Gadgets</h2>

                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;