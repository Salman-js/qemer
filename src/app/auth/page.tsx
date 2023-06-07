'use client';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import LoginItem from './loginItem';
import SignupItem from './signupItem';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../slices/masterSlice';
import ForgotPasswordItem from './forgotPasswordItem';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { useRouter } from 'next/navigation';

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);
  return (
    <div className='login-container'>
      <div className='login-main-container'>
        <div className='intro-container'>
          <p className='text-4xl text-white font-semibold text-center'>
            A New Way to Learn
          </p>
          <p className='text-lg text-gray-400 text-center mt-4'>
            <span className='text-orange-400'>Qemer</span> is the best platform
            to help you enhance your skills, expand your knowledge and prepare
            for technical interviews.
          </p>
          <Button
            type='default'
            className='rounded-full mx-auto bg-transparent mt-4 text-white'
          >
            Learn more
          </Button>
        </div>
        <div className='lg:w-1/4 md:w-2/3 w-5/6'>
          {activeItem === 1 ? (
            <LoginItem activeItem={activeItem} setActiveItem={setActiveItem} />
          ) : activeItem === 2 ? (
            <SignupItem activeItem={activeItem} />
          ) : (
            <ForgotPasswordItem activeItem={activeItem} />
          )}
          {activeItem === 1 ? (
            <div className='pt-6 text-gray-400 text-sm text-center mx-auto'>
              Don&apos;t have an account?{' '}
              <Button
                className='text-blue-500 border-0'
                size='small'
                onClick={() => setActiveItem(2)}
              >
                Sign up
              </Button>
            </div>
          ) : (
            <div className='pt-6 text-gray-400 text-sm text-center mx-auto'>
              Already have an account?{' '}
              <Button
                className='text-blue-500 border-0'
                onClick={() => setActiveItem(1)}
                size='small'
              >
                Sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Index;
