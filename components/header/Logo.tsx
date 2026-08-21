import Image from 'next/image';
import logo from '../../public/images/logo.svg';
import { PiSidebarThin } from 'react-icons/pi';
import Link from 'next/link';
import { ShikoLogo } from '../logo/ShikoLogo';

const Logo = () => {
  return (
    <div className='flex items-center justify-between bg-surface p-7.5 h-24 gap-7.5 rounded-[18px] w-full'>
      <Link href='/'>
        <ShikoLogo className='h-8.75 w-35 text-primary' />
      </Link>
      <div className='p-3 bg-base rounded-full'>
        <PiSidebarThin height={16} width={17} />
      </div>
    </div>
  );
};

export default Logo;
