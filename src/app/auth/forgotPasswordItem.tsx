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

const ForgotPasswordItem: React.FC<loginItemProps> = ({ activeItem }) => {
  return (
    <Grow in={activeItem === 3}>
      <div className='login-form-container'>
        <p className='text-xl text-white'>Reset password</p>
        <p className='text-sm text-gray-400 font-light mt-2'>
          We&apos;ll send you an email with a link to reset your account
          password
        </p>
        <div className='space-y-3 mt-4'>
          <Input
            placeholder='Email'
            prefix={<MailOutlined style={{ color: 'white' }} />}
            className='text-input'
          />
          <Button type='primary' className='bg-blue-500 w-full'>
            Send email
          </Button>
        </div>
      </div>
    </Grow>
  );
};
export default ForgotPasswordItem;
