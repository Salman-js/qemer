import React from 'react';

type indexProps = {};

const index: React.FC<indexProps> = () => {
  return (
    <div className='login-container'>
      <div className='login-main-container'>
        <div className='login-form-container'>
          <p className='text-xl text-white'>Sign in</p>
          <p className='text-sm text-gray-400 font-light'>
            Login to manage your account
          </p>
        </div>
      </div>
    </div>
  );
};
export default index;
