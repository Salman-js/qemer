import React from 'react';
import { useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { TfiTwitter } from 'react-icons/tfi';

type twitterAuthProps = {};

const TwitterAuth: React.FC<twitterAuthProps> = () => {
  const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);
  const onClick = async () => {
    try {
      const newUser = await signInWithTwitter();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      className='p-2 rounded-lg border border-blue-500 bg-transparent flex justify-center items-center cursor-pointer'
      onClick={onClick}
    >
      <TfiTwitter className='text-white' size={25} />
    </div>
  );
};
export default TwitterAuth;
