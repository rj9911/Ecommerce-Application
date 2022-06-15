// For good Layout i.e at footer, headphome image moving to right 
import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
// Head same as head element in HTML

// children is prop.
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      {/* Layout */}
      <Head>
       <title>JS Mastery Store</title>
      </Head>
      {/* HTml File header semantic Tag */}
      <header>
        <Navbar/>
        {/* (Ctrl + Space) to import the navabar automatic*/}
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        {/* inside this we render the Footer component */}
        <Footer />
      </footer>
    </div>
  )
}

export default Layout