import { cn } from '@/utils/cn';
import Link from 'next/link';
import { IconType } from 'react-icons';

type SideBarLinkProps = {
  variant?: 'isActive' | '!isActive';
  href: string;
  icon: IconType;
  label: string;
};

export const SideBarLink = ({
  variant = '!isActive',
  href,
  icon: Icon,
  label,
}: SideBarLinkProps) => {
  const isActive = variant === 'isActive';

  return (
    <Link
      href={href}
      className={cn(
        'group rounded-full p-2 transition-all duration-200 flex items-center gap-2',
        isActive
          ? 'bg-linear-to-r from-accent/20 to-surface'
          : 'hover:bg-linear-to-r hover:from-base hover:to-surface',
      )}
    >
      {/* <div> */}
      <span
        className={cn(
          'p-2 rounded-full group-hover:bg-muted-text group-hover:text-white',
          isActive ? 'bg-accent text-surface' : 'bg-base',
        )}
      >
        <Icon />
      </span>
      {/* </div> */}
      {/* <div> */}
      <span className={cn(isActive ? 'text-accent' : 'text-muted-text')}>
        {label}
      </span>
      {/* </div> */}
    </Link>
    // <div className='p-2 bg-linear-to-r from-accent/20 to-surface rounded-full flex items-center justify-start gap-4'>
    //   <div className='bg-accent rounded-full p-2'>
    //     <TbLayoutDashboard className='text-white' />
    //   </div>
    //   <p className='text-accent font-semibold'>Dashboard</p>
    //   <Link href={''} className='hover:bg-accent p-4'>
    //     Test
    //   </Link>
    // </div>
  );
};
