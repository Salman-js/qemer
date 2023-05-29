'use client';
import {
  UserOutlined,
  KeyOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import { Input, Button } from 'antd';
import Link from 'next/link';
import React from 'react';

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <div className='login-container'>
      <div className='login-main-container'>
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
                visible ? (
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
        <div className='pt-6 text-gray-400 text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='' className='text-blue-500'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default index;
