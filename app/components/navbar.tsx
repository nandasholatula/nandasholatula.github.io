import React, { useState } from "react"; 
import Link from 'next/link';
import { useRouter } from "next/router";
import Router from "next/router";

export default function Navbar() {

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', url: '/' },
    { id: 2, text: 'Blog', url: '/blog' },
  ];

  return (
    <nav className='xl:px-60 px-8'>
      {/* Logo */}
      <div className='flex items-center justify-between'>
        <h5 className='font-doodle text-2xl mr-8 cursor-pointer tracking-widest'>Akabaru.</h5>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li key={item.id}>
              <Link href={item.url} className="cursor-pointer hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-zinc-900">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>

    
  );
};

