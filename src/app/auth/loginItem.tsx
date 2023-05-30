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
import React from 'react';

type loginItemProps = {
  activeItem: number;
};

const LoginItem: React.FC<loginItemProps> = ({ activeItem }) => {
  return (
    <Grow in={activeItem === 1} style={{ transformOrigin: '1 0 1' }}>
      <div className='login-form-container'>
        <p className='text-xl text-white'>Sign in</p>
        <p className='text-sm text-gray-400 font-light mt-2'>
          Login to manage your account
        </p>
        <div className='space-y-3 mt-4'>
          <Input
            placeholder='Email'
            prefix={<UserOutlined style={{ color: 'white' }} />}
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
          />
          <div className='pb-3'>
            <Link href='' className='text-blue-500 text-sm'>
              forgot password?
            </Link>
          </div>
          <Button type='primary' className='bg-blue-500 w-full'>
            Sign in
          </Button>
        </div>
      </div>
    </Grow>
  );
};
export default LoginItem;
