import './globals.css';
import StoreProvider from './storeProvider';

export const metadata = {
  title: 'Qemer',
  description: 'Learn to code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='app'>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
