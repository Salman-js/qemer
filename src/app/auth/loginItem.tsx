'use client';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  InfoCircleOutlined,
  KeyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Grow } from '@mui/material';
import { Button as AntButton, Input, Tooltip, Divider } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import GoogleAuth from './googleAuth';
import GithubAuth from './githubAuth';
import TwitterAuth from './twitterAuth';

type loginItemProps = {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
};

const LoginItem: React.FC<loginItemProps> = ({ activeItem, setActiveItem }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await signInWithEmailAndPassword(
        loginData.email,
        loginData.password
      );
      if (!newUser) return;
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Grow in={activeItem === 1} style={{ transformOrigin: '1 0 1' }}>
      <div className='login-form-container'>
        <p className='text-xl text-white'>Sign in</p>
        <p className='text-sm text-gray-400 font-light mt-2'>
          Login to manage your account
        </p>
        <form onSubmit={onSubmit}>
          <div className='space-y-3 mt-4'>
            <Input
              placeholder='Email'
              prefix={<UserOutlined style={{ color: 'white' }} />}
              value={loginData.email}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                });
              }}
              className='text-input'
              status={
                error?.code === 'auth/user-not-found' ||
                error?.code === 'auth/invalid-email' ||
                error?.code === 'auth/wrong-password'
                  ? 'error'
                  : ''
              }
              suffix={
                (error?.code === 'auth/user-not-found' ||
                  error?.code === 'auth/invalid-email' ||
                  error?.code === 'auth/wrong-password') && (
                  <Tooltip title={error?.code} trigger='click' defaultOpen>
                    <InfoCircleOutlined style={{ color: 'red' }} />
                  </Tooltip>
                )
              }
            />
            <Input.Password
              placeholder='Password'
              prefix={<KeyOutlined style={{ color: 'white' }} />}
              iconRender={(visible) =>
                !visible ? (
                  <EyeOutlined style={{ color: 'white' }} />
                ) : (
                  <EyeInvisibleOutlined style={{ color: 'white' }} />
                )
              }
              className='text-input'
              value={loginData.password}
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                });
              }}
            />
            <div className='pb-3'>
              <AntButton
                type='link'
                className='text-blue-500 text-sm'
                size='small'
                onClick={() => setActiveItem(3)}
              >
                forgot password?
              </AntButton>
            </div>
            <Button
              type='submit'
              disabled={
                !loginData.email.trim().length ||
                !loginData.password.trim().length
              }
              loading={loading}
              primary
              className='w-full'
            >
              Sign in
            </Button>
            <Divider style={{color: 'white'}}>Or</Divider>
            <div className='w-full flex flex-row justify-center space-x-6 items-center'>
              <GoogleAuth />
              <GithubAuth />
            </div>
          </div>
        </form>
      </div>
    </Grow>
  );
};
export default LoginItem;
