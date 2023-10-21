import React from 'react';
import { FaBars, FaSearch } from "react-icons/fa";
import { BiHeart, BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="flex gap-2 text-base drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className='btn bg-transparent border-none hover:bg-white hover:text-gray-500'>
                                    <span className='flex items-center justify-center gap-2 text-base'><FaBars></FaBars>Menu</span>
                                </label>
                                <div className='my-auto font-semibold hover:text-gray-500 lg:ml-2 flex items-center justify-center gap-2 cursor-pointer text-base text-left'>
                                <BiSearch></BiSearch>
                                    Search
                                </div>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>

                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="navbar-center lg:flex">
                    <div className='text-[30px] lg:text-[34px] font-bold'>
                           <Link to='/'>FENDI</Link>
                        </div>
                    </div>
                    <div className="navbar-end text-lg">
                        <Link><BiHeart></BiHeart></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;