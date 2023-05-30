'use client';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  KeyOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Grow } from '@mui/material';
import { Button, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

type loginItemProps = {
  activeItem: number;
};

const SignupItem: React.FC<loginItemProps> = ({ activeItem }) => {
  return (
    <Grow in={activeItem === 2}>
      <div className='login-form-container'>
        <p className='text-xl text-white'>Sign up</p>
        <p className='text-sm text-gray-400 font-light mt-2'>
          Create your account
        </p>
        <div className='space-y-3 mt-4'>
          <Input
            placeholder='Name'
            prefix={<UserOutlined style={{ color: 'white' }} />}
            className='text-input'
          />
          <Input
            placeholder='Email'
            prefix={<MailOutlined style={{ color: 'white' }} />}
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
          <Button type='primary' className='bg-blue-500 w-full'>
            Create account
          </Button>
        </div>
      </div>
    </Grow>
  );
};
export default SignupItem;
