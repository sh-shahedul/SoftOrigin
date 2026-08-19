import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Share/Navbar';
import Footer from '../Components/Share/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <header>
                <Navbar></Navbar>
            </header>
           <main className='flex-1'>
             <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default MainLayout;
