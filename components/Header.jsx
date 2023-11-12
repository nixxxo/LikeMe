import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className='transition-all duration-150 hover:scale-105'>
          <div className="text-2xl font-semibold text-custom-accent">LikeMe</div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-custom-accent hover:text-gray-800">Home</Link>
          </li>
          <li>
            <Link href="/account" className="text-custom-accent hover:text-gray-800">Account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
