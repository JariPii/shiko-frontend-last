import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='bg-base h-screen p-4'>{children}</div>;
}
