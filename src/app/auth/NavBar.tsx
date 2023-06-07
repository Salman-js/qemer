'use client';
import { ArrowBack } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { auth } from '../../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

type navBarProps = {};

const NavBar: React.FC<navBarProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className='fixed text-white rounded-b-xl w-full z-10 top-0 p-4 flex flex-row justify-between'>
      <div className='flex flex-row'>
        <div>
          <Image src={require('../favicon.ico')} alt='LOGO' className='w-8' />
        </div>
        <div className='ml-2'>
          <Link href='/'>
            <span className='text-orange-400 text-xl my-auto inline-block'>
              Qemer
            </span>
          </Link>
        </div>
      </div>
      {/* {user && <Button animated negative size='medium' className='my-auto'>
        <Button.Content visible>Logout</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>} */}
    </nav>
  );
};
export default NavBar;
