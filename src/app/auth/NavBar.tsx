'use client';
import { ArrowBack } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type navBarProps = {};

const NavBar: React.FC<navBarProps> = () => {
  return (
    <nav className='fixed text-white rounded-b-xl w-full z-10 top-0 p-4 flex flex-row justify-start'>
      <div>
        <Image src={require('../favicon.ico')} alt='LOGO' className='w-8' />
      </div>
      <div className='ml-2'>
        <span className='text-orange-400 text-xl my-auto inline-block'>
          Qemer
        </span>
      </div>
    </nav>
  );
};
export default NavBar;
