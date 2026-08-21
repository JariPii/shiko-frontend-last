'use client';

import { generalLinks, menuLinks } from '@/utils/links';
import { SideBarLink } from '../navigation/SideBarLink';
import { usePathname } from 'next/navigation';

const LinksContainer = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col bg-surface h-fit w-full p-7.5 gap-4 rounded-2xl'>
      <h2>MENU</h2>
      {menuLinks.map((link) => (
        <SideBarLink
          key={link.href}
          href={link.href}
          icon={link.icon}
          label={link.label}
          variant={pathName === link.href ? 'isActive' : '!isActive'}
        />
      ))}
      <h2>GENERAL</h2>
      {generalLinks.map((link) => (
        <SideBarLink
          key={link.href}
          href={link.href}
          icon={link.icon}
          label={link.label}
          variant={pathName === link.href ? 'isActive' : '!isActive'}
        />
      ))}
    </div>
  );
};

export default LinksContainer;
