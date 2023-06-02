import React from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/firebase';
import { SiGithub } from 'react-icons/si';

type githubAuthProps = {};

const GithubAuth: React.FC<githubAuthProps> = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const onClick = async () => {
    try {
      const newUser = await signInWithGithub();
      console.log(newUser);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <div
      className='p-2 rounded-lg border border-blue-500 bg-transparent flex justify-center items-center cursor-pointer'
      onClick={onClick}
    >
      <SiGithub className='text-white' size={25} />
    </div>
  );
};
export default GithubAuth;
