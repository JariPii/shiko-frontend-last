import Sidebar from '@/components/sidebar/Sidebar';
import MainHeaderBar from '@/components/header/MainHeaderBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-base h-screen grid grid-cols-[310px_1fr] p-8 gap-7.5'>
      <aside className=''>
        <Sidebar />
      </aside>
      <div className='flex flex-col gap-7.5 min-h-0'>
        <header>
          <MainHeaderBar />
        </header>
        {/* <div>BreadCrumbs</div> */}
        <main className='flex-1 min-h-0 overflow-auto'>{children}</main>
      </div>
    </div>
  );
}
