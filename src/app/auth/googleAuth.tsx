import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { SiGoogle } from 'react-icons/si';

type googleAuthProps = {};

const GoogleAuth: React.FC<googleAuthProps> = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const onClick = async () => {
    try {
      const newUser = await signInWithGoogle();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      className='p-3 rounded-lg border border-blue-500 bg-transparent flex justify-center items-center cursor-pointer'
      onClick={onClick}
    >
      <SiGoogle className='text-white' size={22} />
    </div>
  );
};
export default GoogleAuth;
