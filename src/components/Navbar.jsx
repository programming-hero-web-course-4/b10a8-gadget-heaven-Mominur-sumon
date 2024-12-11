import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li><NavLink to = ''>Home</NavLink></li>
        <li><a>Stattistics</a></li>
        <li><NavLink to ='/dashboard'>DashBoard</NavLink ></li>
        <li> <NavLink to="purchaseHistory">Purchased History</NavLink> </li>
    </>;

   

    return (
        <div className="navbar bg-[#9538E2]">
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
                <a className="bg-white text-xl w-10 h-10 p-2 rounded-full border-2"><i class="fa-solid fa-cart-shopping"></i></a>
                <a className="bg-white text-xl w-10 h-10 p-2 rounded-full border-2"><i class="fa-regular fa-heart"></i></a>
            </div>
        </div>
    );
};

export default Navbar;