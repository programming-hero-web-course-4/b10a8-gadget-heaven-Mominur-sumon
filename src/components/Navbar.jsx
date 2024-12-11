import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContext } from '../main';

const Navbar = () => {

    const {Cards, wishList} = useContext(AppContext);
    const links = <>
        <li><NavLink to = ''>Home</NavLink></li>
        <li><NavLink to="/statistics">Stattistics</NavLink></li>
        <li><NavLink to ='/dashboard'>DashBoard</NavLink ></li>
        <li> <NavLink to="purchaseHistory">Purchased History</NavLink> </li>
    </>;
    const location = useLocation();
    if(location.pathname === '/'){
        document.title = 'Gadget Heaven | Home';
    }
    else if(location.pathname === '/dashboard'){
        document.title = 'Gadget Heaven | Dashboard'
    }
    else if(location.pathname === '/purchaseHistory'){
        document.title = 'Gadget Heaven | Purchase History'
    }
    else if(location.pathname === '/products/details/'){
        document.title = 'Gadget Heaven | Product Details'
    }
    else if(location.pathname === '/products/laptops'){
        document.title = 'Gadget Heaven | Laptops'
    }
    else if(location.pathname === '/products/phones'){
        document.title = 'Gadget Heaven | Phones'
    }
    else if(location.pathname === '/products/accessories'){
        document.title = 'Gadget Heaven | Accessories'
    }
    else if(location.pathname === '/products/smartwatches'){
        document.title = 'Gadget Heaven | Smart Watches'
    }
    else if(location.pathname === '/products/macbooks'){
        document.title = 'Gadget Heaven | Macbooks'
    }
    else if(location.pathname === '/products/iphones'){
        document.title = 'Gadget Heaven | Iphones'
    }

    else{
        document.title = 'Gadget Heaven'
    }

    return (
        <div className={`navbar ${location.pathname==='/' && 'bg-[#9538E2]' }`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold p-4 text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div className='relative'><a className="bg-white text-xl w-10 h-10 p-2 rounded-full border-2"><i class="fa-solid fa-cart-shopping"></i></a></div>
                <div className='absolute top-2 right-14 font-bold border-2 w-6 h-6 rounded-full flex justify-center items-center bg-[#9538E2] text-white
                '>{Cards.length}</div>
                
                <div className='relative'>
                <a className="bg-white text-xl w-10 h-10 p-2 rounded-full border-2"><i class="fa-regular fa-heart"></i></a>
                </div>
                <div className='absolute top-2 right-0 font-bold border-2 w-6 h-6 rounded-full flex justify-center items-center bg-[#9538E2] text-white'>{wishList.length}</div>
            </div>
        </div>
    );
};

export default Navbar;