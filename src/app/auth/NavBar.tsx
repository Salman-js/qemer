'use client';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

type navBarProps = {};

const NavBar: React.FC<navBarProps> = () => {
  return (
    <nav className='fixed text-white rounded-b-xl w-full z-10 top-0 p-4'>
      <Link href='/' className='text-white text-sm'>
        <ArrowBack sx={{ color: 'white', fontSize: 20 }} />
        <span className='ml-2 my-auto'> Back to Home</span>
      </Link>
    </nav>
  );
};
export default NavBar;
