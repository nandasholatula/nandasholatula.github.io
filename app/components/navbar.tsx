import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', url:'/' },
    { id: 2, text: 'Blog', url:'blog' },
   
  ];

  return (
    <nav className='sticky top-0 z-10  backdrop-blur-lg  flex justify-between items-center h-15  mx-auto px-4 text-white w-full'>
      {/* Logo */}
      
      <h1 className='font-doodle w-full text-3xl font-bold text-[#00df9a]'>PFLIP.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
          {navItems.map(item => (
              <li key={item.id}>
                <a href={item.url} className="block text-[#00df9a] hover:bg-gray-900 px-3 py-2 rounded">{item.text}</a>
              </li>
          ))}

            
      </ul>

      
    </nav>
  );
};

export default Navbar;