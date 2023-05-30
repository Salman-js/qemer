'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const metadata = {
  title: 'Qemer',
  description: 'Learn to code',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
      retry: 3,
    },
  },
});

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <body className='app'>
        <Provider store={store}>{children}</Provider>
      </body>
    </QueryClientProvider>
  );
}
