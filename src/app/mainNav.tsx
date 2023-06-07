'use client';
import { LogoutOutlined } from '@ant-design/icons';
import { ArrowBack } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from 'antd';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

type navBarProps = {};

const MainNav: React.FC<navBarProps> = () => {
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <nav className='fixed text-white rounded-b-xl w-full z-10 top-0 p-4 flex flex-row justify-between'>
      <div className='flex flex-row'>
        <div>
          <Image src={require('./favicon.ico')} alt='LOGO' className='w-8' />
        </div>
        <div className='ml-2'>
          <span className='text-orange-400 text-xl my-auto inline-block'>
            Qemer
          </span>
        </div>
      </div>
      <Button icon={<LogoutOutlined style={{color: '#ee9393', marginTop: -6}} />} onClick={() => signOut()} />
    </nav>
  );
};
export default MainNav;
