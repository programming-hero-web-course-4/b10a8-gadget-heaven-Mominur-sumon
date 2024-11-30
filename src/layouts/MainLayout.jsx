import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[350px]'>
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;