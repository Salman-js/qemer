'use client';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  KeyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Grow } from '@mui/material';
import { Button, Input } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

type loginItemProps = {
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
};

const LoginItem: React.FC<loginItemProps> = ({ activeItem, setActiveItem }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              <Button
                type='link'
                className='text-blue-500 text-sm'
                size='small'
                onClick={() => setActiveItem(3)}
              >
                forgot password?
              </Button>
            </div>
            <Button
              type='primary'
              htmlType='submit'
              className='bg-blue-500 w-full'
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </Grow>
  );
};
export default LoginItem;
