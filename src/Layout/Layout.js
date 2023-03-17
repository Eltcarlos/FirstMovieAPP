import React from 'react';
import Navbar from './Navbar/NavBar';
import Footer from './Footer/Footer';
import MobileFooter from './Footer/MobileFooter';
const Layout = ({children}) => {
  return (
    <>
    <div className='bg-main text-white'>
      <Navbar/>
      {children}
      <Footer/>
      {/* MOBILE FOOTER */}
      <MobileFooter/>
    </div>
    </>
  )
}

export default Layout
