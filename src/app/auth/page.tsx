'use client';
import { Button } from 'antd';
import React, { useState } from 'react';
import LoginItem from './loginItem';
import SignupItem from './signupItem';

type indexProps = {};

const Index: React.FC<indexProps> = () => {
  const [activeItem, setActiveItem] = useState(1);
  return (
    <div className='login-container'>
      <div className='login-main-container'>
        {activeItem === 1 ? (
          <LoginItem activeItem={activeItem} />
        ) : (
          <SignupItem activeItem={activeItem} />
        )}
        {activeItem === 1 ? (
          <div className='pt-6 text-gray-400 text-sm'>
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
          <div className='pt-6 text-gray-400 text-sm'>
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
  );
};
export default Index;
