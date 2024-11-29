import React from 'react';

const Footer = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <h2 className='text-center font-bold text-3xl '>Gadget Heaven</h2>
            <p className='text-center font-medium text-gray-600 my-3'>Leading the way in cutting-edge technology and innovation.</p>
            <footer className="footer p-10">
            
                <nav className='flex flex-col items-center justify-center'>
                    <h6 className="text-xl font-bold text-gray-800">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col items-center justify-center'>
                    <h6 className="text-xl font-bold text-gray-800">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col items-center justify-center'>
                    <h6 className="text-xl font-bold text-gray-800">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            
        </div>
    );
};

export default Footer;