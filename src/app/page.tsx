'use client';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../slices/masterSlice';
import Link from 'next/link';

export default function Home() {
  const user = useSelector((state: IRootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      redirect('/auth');
    }
  }, [user]);
  return (
    <main className=''>
      <Link href='/auth'>Hello</Link>
    </main>
  );
}
