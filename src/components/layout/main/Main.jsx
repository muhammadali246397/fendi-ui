import React from 'react';
import Navbar from '../../pages/share/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/share/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;