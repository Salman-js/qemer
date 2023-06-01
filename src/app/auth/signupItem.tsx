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
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../slices/authSlice';
import { useRouter } from 'next/navigation';

type loginItemProps = {
  activeItem: number;
};

const SignupItem: React.FC<loginItemProps> = ({ activeItem }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    displayName: '',
    email: '',
    password: '',
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(
        signupData.email,
        signupData.password
      );
      if (!newUser) return;
      dispatch(setUser(newUser.user));
      router.push('/');
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Grow in={activeItem === 2}>
      <div className='login-form-container'>
        <p className='text-xl text-white'>Sign up</p>
        <p className='text-sm text-gray-400 font-light mt-2'>
          Create your account
        </p>
        <form onSubmit={onSubmit}>
          <div className='space-y-3 mt-4'>
            <Input
              placeholder='Name'
              prefix={<UserOutlined style={{ color: 'white' }} />}
              value={signupData.displayName}
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  displayName: e.target.value,
                });
              }}
              className='text-input'
            />
            <Input
              placeholder='Email'
              prefix={<MailOutlined style={{ color: 'white' }} />}
              value={signupData.email}
              onChange={(e) => {
                setSignupData({
                  ...signupData,
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
              value={signupData.password}
              onChange={(e) => {
                setSignupData({
                  ...signupData,
                  password: e.target.value,
                });
              }}
            />
            <Button
              type='primary'
              htmlType='submit'
              className='bg-blue-500 w-full'
              loading={loading}
              disabled={
                !signupData.displayName.trim().length ||
                !signupData.email.trim().length ||
                signupData.password.trim().length <= 5
              }
            >
              Create account
            </Button>
          </div>
        </form>
      </div>
    </Grow>
  );
};
export default SignupItem;
