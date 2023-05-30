import NavBar from './NavBar';

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='h-screen'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBar />
      {children}
    </section>
  );
}
